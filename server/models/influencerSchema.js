const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const joi = require("joi");
const influencerSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    interests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "interest",
      },
    ],

    lastLogin: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: Boolean,
      default: false,
    },
    influencerAvatar: {
      imageURL: {
        type: String,
        default:
          "https://res.cloudinary.com/dfkgs6zsr/image/upload/v1636376320/Profile_avatar_placeholder_large_u3gfrg.png",
      },
      public_id: {
        type: String,
        default: "sample_id",
      },
    },
    nb_subscribers: Number,
    nb_subscriptions: Number,
    nb_posts: Number,
    average_likes: Number,
    average_comments: Number,
    engagement_rate_likes: Number,
    engagement_rate_comments: Number,
    phone: String,
  },
  {
    timestamps: {
      createdAt: "influencerCreatedAt",
      updatedAt: "influencerUpdatedAt",
    },
  }
);
module.exports = mongoose.model("influencer", influencerSchema);

const registerValidation = (data) => {
  const InfluencerRegister = joi
    .object({
      email: joi.string().required().email(),
      password: joi
        .string()
        .min(8)
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9]+$")),
    })
    .options({ allowUnknown: true }); // allow other info;
  return InfluencerRegister.validate(data);
};

const loginValidation = (data) => {
  //User Register Schema
  const InfluencerLogin = joi.object({
    email: joi.string().email().required(),
    password: joi
      .string()
      .min(8)
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]+$")),
  });

  return InfluencerLogin.validate(data);
};

exports.registerValidation = registerValidation;
exports.loginValidation = loginValidation;
