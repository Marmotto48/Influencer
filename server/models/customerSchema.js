const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const joi = require("joi");
const customerSchema = new Schema(
  {
    accountType: {
      type: String,
      enum: ["particular", "pro"],
      default: "particular",
    },
    firstName: {
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
    phone: String,
    address: String,
    zipcode: String,
    city: String,
    country: String,
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "company",
    },
    brands: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "brand",
        default: [],
      },
    ],

    compaigns: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "compaign",
        default: [],
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
    bio: String,
    customerAvatar: {
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
  },
  {
    timestamps: {
      createdAt: "customerCreatedAt",
      updatedAt: "customerUpdatedAt",
    },
  }
);
module.exports = mongoose.model("customer", customerSchema);
