const Company = require("../models/companySchema");
module.exports = {
  create: async (req, res) => {
    try {
      const { name, tax_code, address, city, zipcode, country } = req.body;
      const newCustomer = await Company.create({
        name,
        tax_code,
        address,
        city,
        zipcode,
        country,
      });
      res.status(201).send({ company: newCustomer });
    } catch (error) {
      res.status(500).send({
        msg: "Cannot save new user please check your information again.",
        error,
      });
    }
  },
  getCompany: async (req, res) => {
    try {
      const companyID = req.body;
      const company = await Company.findById(companyID);
      res.status(200).send(company);
    } catch (error) {
      res.status(500).send({ msg: "Can not get Company information.", error });
    }
  },
  updateCompany: async (req, res) => {
    try {
      const companyID = req.body;
      const { name, tax_code, address, city, zipcode, country } = req.body;
      const company = await Company.findByIdAndUpdate(
        companyID,
        {
          name,
          tax_code,
          address,
          city,
          zipcode,
          country,
        },
        { new: true }
      );
      res.status(200).send(company);
    } catch (error) {
      res
        .status(500)
        .send({ msg: "Can not update Company information.", error });
    }
  },
  deleteCompany: async (req, res) => {
    try {
      const companyID = req.body;
      const deleteCompany = await Company.findByIdAndDelete(companyID);
      res.status(200).send({ msg: "User deleted.", deleteCompany });
    } catch (error) {
      res.status(500).send({ msg: "Can not delete Company.", error });
    }
  },
  getAll: async (req, res) => {
    try {
      const companies = await Company.find();
      res.status(200).send(companies);
    } catch (error) {
      res.status(500).send({ msg: "can not get Companies information", error });
    }
  },
};
