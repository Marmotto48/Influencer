const Brand = require("../models/brandSchema");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
  create: async (req, res) => {
    try {
      const { name, tax_code, address, city, zipcode, country } = req.body;
      const newBrand = await Brand.create({
        name,
        tax_code,
        address,
        city,
        zipcode,
        country,
      });
      res.status(201).send({ Brand: newBrand });
    } catch (error) {
      res.status(500).send({
        msg: "Cannot save new user please check your information again.",
        error,
      });
    }
  },
  getBrand: async (req, res) => {
    try {
      //   const brandID = req.body;
      const brandID = req.params.id;
      const brand = await Brand.findById(brandID);
      res.status(200).send(brand);
    } catch (error) {
      res.status(500).send({ msg: "Can not get Brand information.", error });
    }
  },
  updateBrand: async (req, res) => {
    try {
      //   const brandID = req.body;
      const brandID = req.params.id;
      const { name, tax_code, address, city, zipcode, country } = req.body;
      const brand = await Brand.findByIdAndUpdate(
        brandID,
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
      res.status(200).send(brand);
    } catch (error) {
      res.status(500).send({ msg: "Can not update Brand information.", error });
    }
  },
  deleteBrand: async (req, res) => {
    try {
      //   const brandID = req.body;
      const brandID = req.params.id;
      const deleteBrand = await Brand.findByIdAndDelete(brandID);
      res.status(200).send({ msg: "Brand deleted.", deleteBrand });
    } catch (error) {
      res.status(500).send({ msg: "Can not delete Brand.", error });
    }
  },
  getAll: async (req, res) => {
    try {
      const brands = await Brand.find();
      res.status(200).send(brands);
    } catch (error) {
      res.status(500).send({ msg: "can not get Brands information", error });
    }
  },
  logo: async (req, res) => {
    try {
      // const brandID = req.body;
      const brandID = req.params.id;
      const imageInfo = await cloudinary.uploader.upload(req.file.path);
      const existBrand = await Brand.findById(brandID);
      cloudinary.uploader.destroy(existBrand.logo.public_id);
      const updatedBrand = await Brand.findByIdAndUpdate(brandID, {
        logo: {
          imageURL: imageInfo.url,
          public_id: imageInfo.public_id,
        },
      });
      res.send(updatedBrand);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error });
    }
  },
};
