const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Influencer = require("../models/influencerSchema");
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
      // const interests = JSON.parse(req.body.interests);
      const {
        firstname,
        lastName,
        email,
        password,
        username,
        bio,
        location,
        interests,
        lastLogin,
        status,
        phone,
      } = req.body;
      //unique email
      const searchEmail = await Influencer.findOne({ email });
      if (searchEmail) {
        return res.status(400).send({ msg: "Email already exists." });
      }
      //hash password
      const salt = 10;
      const genSalt = bcrypt.genSaltSync(salt);
      const hashedPW = await bcrypt.hash(password, genSalt);
      //save new Influencer //token
      const newInfluencer = await Influencer.create({
        firstname,
        lastName,
        email,
        password: hashedPW,
        username,
        bio,
        location,
        interests: interests,
        lastLogin,
        status,
        phone,
      });
      //Token
      const token = jwt.sign(
        {
          username: newInfluencer.name,
          phone: newInfluencer.phone,
          email: newInfluencer.email,
          id: newInfluencer._id,
        },
        process.env.SecretKey
      );
      const influencer = await Influencer.findById(newInfluencer._id)
        .select("-password")
        .populate("interests");

      res.status(201).send({ Influencer: influencer, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        msg: "Cannot save new Influencer please check your information again.",
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
      const searchedUser = await Influencer.findOne({ email });

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
      //LAST LOGIN
      const influencer = await Influencer.findByIdAndUpdate(
        searchedUser._id,
        { $set: { lastLogin: Date.now() } },
        { new: true }
      )
        .select("-password")
        .populate("interests");
      res.status(201).send({ Influencer: influencer, token });
    } catch (error) {
      res.status(500).send({ msg: "Can not login user." });
      console.log(error);
    }
  },
  getInfluencer: async (req, res) => {
    try {
      const influencer = await Influencer.findById(req.params.id)
        .select("-password")
        .populate("interests");
      res.status(200).send(influencer);
    } catch (error) {
      console.log(error);
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
      const influencer = await Influencer.findByIdAndUpdate(
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
      res.status(200).send(influencer);
    } catch (error) {
      res.status(500).send({ msg: "Can not update profile.", error });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteUser = await Influencer.findByIdAndDelete(req.params.id);
      res.status(200).send({ msg: "User deleted.", deleteUser });
    } catch (error) {
      res.status(500).send({ msg: "Can not delete user.", error });
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await Influencer.find({
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
      const existUser = await Influencer.findById(req.params.id);
      cloudinary.uploader.destroy(existUser.influencerAvatar.public_id);
      const updatedUser = await Influencer.findByIdAndUpdate(req.params.id, {
        influencerAvatar: {
          imageURL: imageInfo.url,
          public_id: imageInfo.public_id,
        },
      });
      res.send(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error });
    }
  },
};
