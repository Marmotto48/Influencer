const Collaboration = require("../models/collaborationSchema");
module.exports = {
  create: async (req, res) => {
    try {
      const { campaign, customer, influencer } = req.body;
      const newCollaboration = await Collaboration.create({
        campaign,
        customer,
        influencer,
      });

      const collaboration = await Collaboration.findById(newCollaboration._id)
        .populate("campaign")
        .populate("customer")
        .populate("influencer");

      res.status(201).send({ Collaboration: collaboration });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        msg: "Cannot save new collaboration please check your information again.",
        error,
      });
    }
  },
  getCollaboration: async (req, res) => {
    try {
      const collaborationID = req.body;
      const collaboration = await Collaboration.findById(collaborationID)
        .populate("campaign")
        .populate("customer")
        .populate("influencer");
      res.status(200).send(collaboration);
    } catch (error) {
      res.status(500).send({ msg: "Can not get Company information.", error });
    }
  },
  deleteCollaboration: async (req, res) => {
    try {
      const collaborationID = req.body;
      const deleteCollaboration = await Collaboration.findByIdAndDelete(
        collaborationID
      );
      res.status(200).send({ msg: "User deleted.", deleteCollaboration });
    } catch (error) {
      res.status(500).send({ msg: "Can not delete collaboration.", error });
    }
  },
  getAll: async (req, res) => {
    try {
      const collaborations = await Collaboration.find({})
        .populate("campaign")
        .populate("customer")
        .populate("influencer");
      res.status(200).send(collaborations);
    } catch (error) {
      res
        .status(500)
        .send({ msg: "can not get collaborations information", error });
    }
  },
};
