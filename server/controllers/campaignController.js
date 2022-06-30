const Campaign = require("../models/campaignSchema");

module.exports = {
  create: async (req, res) => {
    try {
      const {
        product_name,
        product_desc,
        category,
        simple_request,
        brief_request,
        do_rules,
        do_not_rules,
        tags,
        mentions,
        min_followers,
        max_followers,
        interests,
        moodboard,
        budget,
        visible_from,
        ends_on,
        status,
      } = req.body;
      const newCampaign = await Campaign.create({
        product_name,
        product_desc,
        category,
        simple_request,
        brief_request,
        do_rules,
        do_not_rules,
        tags,
        mentions,
        min_followers,
        max_followers,
        interests,
        moodboard,
        budget,
        visible_from,
        ends_on,
        status,
      });
      const campain = await Campaign.findById(newCampaign._id).populate(
        "interests"
      );
      res.status(201).send({ Campaign: campain });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        msg: "Cannot save new Campaign please check your informations again.",
        error,
      });
    }
  },
  getCampaign: async (req, res) => {
    try {
      //   const compaignID = req.body;
      const campaignID = req.params.id;
      const campaign = await Campaign.findById(campaignID).populate(
        "interests"
      );
      res.status(200).send(campaign);
    } catch (error) {
      res.status(500).send({ msg: "Can not get Campaign information.", error });
    }
  },
  updateCampaign: async (req, res) => {
    try {
      //   const compaignID = req.body;
      const campaignID = req.params.id;
      const {
        product_name,
        product_desc,
        category,
        simple_request,
        brief_request,
        do_rules,
        do_not_rules,
        tags,
        mentions,
        min_followers,
        max_followers,
        interests,
        moodboard,
        budget,
        visible_from,
        ends_on,
        status,
      } = req.body;
      const campaign = await Campaign.findByIdAndUpdate(
        campaignID,
        {
          product_name,
          product_desc,
          category,
          simple_request,
          brief_request,
          do_rules,
          do_not_rules,
          tags,
          mentions,
          min_followers,
          max_followers,
          interests,
          moodboard,
          budget,
          visible_from,
          ends_on,
          status,
        },
        { new: true }
      );
      res.status(200).send(campaign);
      // .populate("interests");
    } catch (error) {
      res
        .status(500)
        .send({ msg: "Can not update Campaign information.", error });
    }
  },
  deleteCampaign: async (req, res) => {
    try {
      //   const campaignID = req.body;
      const campaignID = req.params.id;
      const deleteCampaign = await Campaign.findByIdAndDelete(campaignID);
      res.status(200).send({ msg: "Campaign deleted.", deleteCampaign });
    } catch (error) {
      res.status(500).send({ msg: "Can not delete Campaign.", error });
    }
  },
  getAll: async (req, res) => {
    try {
      const campaign = await Campaign.find().populate("interests");
      res.status(200).send(campaign);
    } catch (error) {
      res.status(500).send({ msg: "can not get Campaigns information", error });
    }
  },
  //   logo: async (req, res) => {
  //     try {
  //       // const compaignID = req.body;
  //       const compaignID = req.params.id;
  //       const imageInfo = await cloudinary.uploader.upload(req.file.path);
  //       const existCompaign = await Compaign.findById(compaignID);
  //       cloudinary.uploader.destroy(existCompaign.logo.public_id);
  //       const updatedCompaign = await Compaign.findByIdAndUpdate(compaignID, {
  //         logo: {
  //           imageURL: imageInfo.url,
  //           public_id: imageInfo.public_id,
  //         },
  //       });
  //       res.send(updatedCompaign);
  //     } catch (error) {
  //       console.log(error);
  //       res.status(500).send({ message: error });
  //     }
  //   },
};
