const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collaborationSchema = new Schema(
  {
    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "compaign",
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
    },
    influencer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "influencer",
    },
  },
  {
    timestamps: {
      createdAt: "collaborationCreatedAt",
      updatedAt: "collaborationUpdateAt",
    },
  }
);
module.exports = mongoose.model("collaboration", collaborationSchema);
