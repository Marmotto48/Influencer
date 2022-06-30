const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const compaignSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_desc: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    simple_request: String,
    brief_request: String,
    do_rules: {
      type: [String],
      required: true,
    },
    do_not_rules: {
      type: [String],
      required: true,
    },
    tags: [String],
    mentions: [String],
    min_followers: Number,
    max_followers: Number,
    interests: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "interest",
      },
    ],
    moodboard: [String],
    budget: {
      type: Number,
      required: true,
    },
    visible_from: {
      type: Date,
      // required: true,
    },
    ends_on: {
      type: Date,
      // required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: "campaignCreatedAt",
      updatedAt: "campaignUpdatedAt",
    },
  }
);

module.exports = mongoose.model("compaign", compaignSchema);
