const Interest = require("../models/interestSchema");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
  create: async (req, res) => {
    try {
      const newBody = JSON.parse(req.body.info);
      //Validation
      //   const errors = [];
      //   const { error } = InterestValidation(newBody);
      //   if (error) {
      //     const { details } = error;
      //     details.forEach((item) => errors.push(item.message));
      //     return res.json({ status: 406, msg: errors });
      //   }
      const imageInfo = await cloudinary.uploader.upload(req.file.path);
      const newInterest = await Interest.create({
        name: newBody.name,
        slug: newBody.slug,
        // author: req.userID,
        image: { imageURL: imageInfo.url, public_id: imageInfo.public_id },
      });
      res.json(newInterest);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },
  get: async (req, res) => {
    try {
      const interests = await Interest.find({});
      res.status(200).send(interests);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },
  update: async (req, res) => {
    try {
      const { name, slug, interestID } = req.body;
      const updteInterest = await Interest.findByIdAndUpdate(interestID, {
        name,
        slug,
      });
      res.json(updteInterest);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },
  updateImage: async (req, res) => {
    try {
      const { interestID } = req.body;
      const imageInfo = await cloudinary.uploader.upload(req.file.path);
      const existInterest = await Interest.findById(req.params.id);
      cloudinary.uploader.destroy(existInterest.image.public_id);
      const updatedInterest = await Interest.findByIdAndUpdate(req.params.id, {
        image: { imageURL: imageInfo.url, public_id: imageInfo.public_id },
      });
      res.status(200).send(updatedInterest);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  remove: async (req, res) => {
    try {
      const { interestID } = req.body;
      const deleted = await Interest.findByIdAndDelete(interestID);
      res.status(200).send({ msg: "Interest deleted.", deleted });
    } catch (error) {
      res.status(500).send({ msg: "Can not delete interest.", error });
    }
  },
};
