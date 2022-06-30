const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const interestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: String,
  // addedBy: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "admin",
  //   required: true,
  // },
  image: {
    imageURL: {
      type: String,
    },
    public_id: {
      type: String,
    },
  },
});

module.exports = mongoose.model("interest", interestSchema);
