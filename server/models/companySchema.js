const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tax_code: {
    type: String,
    required: true,
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

module.exports = mongoose.model("company", companySchema);
