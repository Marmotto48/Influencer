const {
  registerValidation,
  loginValidation,
} = require("../middleware/JoiValidation");
const Customer = require("../models/customerSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
module.exports = {
  register: async (req, res) => {
    try {
      //Validation
      const errors = [];
      const { error } = registerValidation(req.body);
      if (error) {
        const { details } = error;
        details.forEach((item) => errors.push(item.message));
        return res.json({ status: 406, msg: errors });
      } else {
        const searchEmail = await Customer.find({ email: req.body.email });
        if (searchEmail.length > 0) {
          return res.json({
            msg: "this email already used!",
            status: 406,
          });
        }
      }
      const {
        accountType,
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
        zipcode,
        city,
        country,
        company,
        brands,
        compaigns,
        lastLogin,
        customerStatus,
        customerAvatar,
        bio,
      } = req.body;
      //hash pasword
      const salt = 10;
      const genSalt = bcrypt.genSaltSync(salt);
      const hashedPW = await bcrypt.hash(password, genSalt);
      const newCustomer = await Customer.create({
        accountType,
        firstName,
        lastName,
        email,
        password: hashedPW,
        phone,
        address,
        zipcode,
        city,
        country,
        company,
        brands,
        compaigns,
        lastLogin,
        customerStatus,
        customerAvatar,
        bio,
      });
      //Token
      const token = jwt.sign(
        {
          accountType: newCustomer.accountType,
          firstName: newCustomer.firstName,
          lastName: newCustomer.lastName,
          email: newCustomer.email,
          lastLogin: newCustomer.lastLogin,
          customerStatus: newCustomer.customerStatus,
          customerAvatar: newCustomer.customerAvatar,
          id: newCustomer._id,
        },
        process.env.SecretKey
      );
      const customer = await Customer.findById(newCustomer._id)
        .select("-password")
        .populate("company")
        .populate("brands");
      // .populate("compaigns");

      res.status(201).send({ customer: customer, token });

      // res.status(201).json({ user: newCustomer, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        msg: "Cannot save new user please check your information again.",
        error,
      });
    }
  },
  login: async (req, res) => {
    try {
      const findByUser = await Customer.findOne({ email: req.body.email });
      const errors = [];
      //Validation
      const { error } = loginValidation(req.body);
      if (error) {
        const { details } = error;
        details.forEach((item) => errors.push(item.message));
        return res.json({ status: 406, msg: errors });
      } else {
        if (!findByUser) {
          return res.json({
            msg: "New member ? Join us now !",
            status: 404,
          });
        } else {
          let comparePass = await bcrypt.compare(
            req.body.password,
            findByUser.password
          );
          if (!comparePass) {
            return res.json({
              msg: "Your password or email are wrong, please check again.",
              status: 406,
            });
          }
        }
      }
      const token = jwt.sign(
        {
          id: findByUser._id,
          avatar: findByUser.customerAvatar,
          usrename: findByUser.username,
          firstName: findByUser.firstName,
          lastName: findByUser.lastName,
          email: findByUser.email,
        },
        process.env.SecretKey
      );
      //LAST LOGIN
      const customer = await Customer.findByIdAndUpdate(
        findByUser._id,
        { $set: { lastLogin: Date.now() } },
        { new: true }
      )
        .select("-password")
        .populate("company")
        .populate("brands");
      res.status(201).send({ customer: customer, token });
    } catch (error) {
      res.status(500).send({ msg: "Can not login user." });
      console.log(error);
    }
  },
  getCustomer: async (req, res) => {
    try {
      const customerID = req.params.id;
      // const customerID = req.body;
      const customer = await Customer.findById(customerID)
        .select("-password")
        .populate("company")
        .populate("brands");
      // .populate("compaigns");
      res.status(200).send(customer);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Can not get customer.", error });
    }
  },
  updateProfile: async (req, res) => {
    try {
      const customerID = req.params.id;
      // const customerID = req.body;
      const {
        accountType,
        firstName,
        lastName,
        phone,
        address,
        zipcode,
        city,
        country,
        company,
        brands,
        compaigns,
        customerStatus,
        bio,
      } = req.body;
      const customer = await Customer.findByIdAndUpdate(
        customerID,
        {
          accountType,
          firstName,
          lastName,
          phone,
          address,
          zipcode,
          city,
          country,
          company,
          brands,
          compaigns,
          customerStatus,
          bio,
        },
        { new: true }
      );
      res.status(200).send(customer);
    } catch (error) {
      // console.log(error);
      res.status(500).send({ msg: "Can not update profile.", error });
    }
  },
  delete: async (req, res) => {
    try {
      const customerID = req.params.id;
      // const customerID = req.body;
      const deleteCustomer = await Customer.findByIdAndDelete(customerID);
      res.status(200).send({ msg: "Customer deleted.", deleteCustomer });
    } catch (error) {
      res.status(500).send({ msg: "Can not delete customer.", error });
    }
  },
  getAll: async (req, res) => {
    try {
      const customers = await Customer.find({
        _id: { $ne: req.userID },
      })
        .select("-password")
        .populate("company")
        .populate("brands")
        .populate("compaigns");
      res.status(200).send(customers);
    } catch (error) {
      res.status(500).send({ msg: "can not get customers", error });
    }
  },
  getCurrent: async (req, res) => {
    try {
      const customerID = req.userID;
      // const customerID = req.body;
      const customer = await Customer.findById(customerID)
        .select("-password")
        .populate("company")
        .populate("brands");
      // .populate("compaigns");
      res.status(200).send(customer);
    } catch (error) {
      // console.log(error);
      res.status(500).send({ msg: "Can not get customer.", error });
    }
  },
  updateAvatar: async (req, res) => {
    try {
      const customerID = req.params.id;
      // const customerID = req.body;
      const imageInfo = await cloudinary.uploader.upload(req.file.path);
      const existCustomer = await Customer.findById(customerID);
      cloudinary.uploader.destroy(existCustomer.customerAvatar.public_id);
      const updatedCustomer = await Customer.findByIdAndUpdate(customerID, {
        customerAvatar: {
          imageURL: imageInfo.url,
          public_id: imageInfo.public_id,
        },
      })
        .select("-password")
        .populate("company")
        .populate("brands");
      res.status(200).send(updatedCustomer);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error });
    }
  },
};
