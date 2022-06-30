const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminSchema = new Schema(
  {
    accountType: {
      type: String,
      enum: ["superadmin", "admin"],
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
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
    phone: {
      type: String,
      required: true,
    },
    lastLogin: Date,
    status: {
      type: Boolean,
      default: false,
    },
    adminAvatar: {
      imageURL: {
        type: String,
        default:
          "https://i.pinimg.com/564x/34/60/3c/34603ce8a80b1ce9a768cad7ebf63c56.jpg",
      },
      public_id: {
        type: String,
        default: "sample_id",
      },
    },
  },
  {
    timestamps: {
      createdAt: "adminCreatedAt",
      updatedAt: "adminUpdatedAt",
    },
  }
);

module.exports = mongoose.model("admin", adminSchema);
