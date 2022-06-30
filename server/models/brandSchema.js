const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const brandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    imageURL: {
      type: String,
      default:
        "https://res.cloudinary.com/dfkgs6zsr/image/upload/v1641470839/logo_otpi64.png",
    },
    public_id: {
      type: String,
      default: "sample_id",
    },
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("brand", brandSchema);
