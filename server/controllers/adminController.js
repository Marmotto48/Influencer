const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminSchema");
const {
  registerValidation,
  loginValidation,
} = require("../middleware/JoiValidation");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
  //register new user
  register: async (req, res) => {
    try {
      const errors = [];
      //Validation
      const { error } = registerValidation(req.body);
      if (error) {
        const { details } = error;
        details.forEach((item) => errors.push(item.message));
        return res.json({ status: 406, msg: errors });
      }
      const {
        firstname,
        lastname,
        email,
        password,
        username,
        accountType,
        status,
        phone,
        lastLogin,
      } = req.body;
      //unique email
      const searchEmail = await Admin.findOne({ email });
      if (searchEmail) {
        return res.status(400).send({ msg: "Email already exists." });
      }
      //hash password
      const salt = 10;
      const genSalt = bcrypt.genSaltSync(salt);
      const hashedPW = await bcrypt.hash(password, genSalt);
      //save new Influencer //token
      const newAdmin = await Admin.create({
        firstname,
        lastname,
        email,
        password: hashedPW,
        username,
        accountType,
        status,
        phone,
        lastLogin,
      });
      //Token
      const token = jwt.sign(
        {
          username: newAdmin.name,
          phone: newAdmin.phone,
          email: newAdmin.email,
          id: newAdmin._id,
        },
        process.env.SecretKey
      );
      res.status(201).send({ Admin: newAdmin, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        msg: "Cannot save new Admin please check your information again.",
        error,
      });
    }
  },
  //login Influencer
  login: async (req, res) => {
    try {
      const errors = [];
      //Validation
      const { error } = loginValidation(req.body);
      if (error) {
        const { details } = error;
        details.forEach((item) => errors.push(item.message));
        return res.json({ status: 406, msg: errors });
      }
      const { email, password } = req.body;
      //   find if the user exist
      const searchedUser = await Admin.findOne({ email });

      //if the email does not exist
      if (!searchedUser) {
        return res.status(400).send({
          msg: "Not a member ? Join our community !",
        });
      }

      // password are equals
      const match = await bcrypt.compare(password, searchedUser.password);
      if (!match) {
        return res.status(400).send({
          msg: "Your email or password is wrong, please try again.",
        });
      }
      // generate token
      const token = jwt.sign(
        { id: searchedUser._id, usrename: searchedUser.username },
        process.env.SecretKey
      );
      res.status(200).send({
        user: searchedUser,
        msg: "Success",
        token,
      });
    } catch (error) {
      res.status(500).send({ msg: "Can not login user." });
      console.log(error);
    }
  },
  getAdmin: async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id).select("-password");
      res.status(200).send(admin);
    } catch (error) {
      res.status(500).send({ msg: "Can not get user.", error });
    }
  },
  updateProfile: async (req, res) => {
    try {
      const {
        firstname,
        lastname,
        location,
        username,
        interests,
        lastLogin,
        status,
        phone,
        bio,
      } = req.body;
      const admin = await Admin.findByIdAndUpdate(
        req.params.id,
        {
          firstname,
          lastname,
          location,
          username,
          interests,
          lastLogin,
          status,
          phone,
          bio,
        },
        { new: true }
      );
      res.status(200).send(admin);
    } catch (error) {
      res.status(500).send({ msg: "Can not update profile.", error });
    }
  },
  deleteAdmin: async (req, res) => {
    try {
      const deleteAdmin = await Admin.findByIdAndDelete(req.params.id);
      res.status(200).send({ msg: "Admin deleted.", deleteAdmin });
    } catch (error) {
      res.status(500).send({ msg: "Can not delete user.", error });
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await Admin.find({
        _id: { $ne: req.userID },
      }).select("-password");
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send({ msg: "can not get users", error });
    }
  },
  updateAvatar: async (req, res) => {
    try {
      const imageInfo = await cloudinary.uploader.upload(req.file.path);
      const existUser = await Admin.findById(req.params.id);
      cloudinary.uploader.destroy(existUser.adminAvatar.public_id);
      const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, {
        adminAvatar: {
          imageURL: imageInfo.url,
          public_id: imageInfo.public_id,
        },
      });
      res.status(200).send(updatedAdmin);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },
};
