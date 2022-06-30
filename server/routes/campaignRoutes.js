const express = require("express");
const {
  create,
  deleteCampaign,
  getCampaign,
  getAll,
  updateCampaign,
} = require("../controllers/campaignController");
const router = express.Router();
const auth = require("../middleware/auth");

//create new campaign
router.post("/", auth, create);
//delete campaing
router.delete("/", auth, deleteCampaign);
//get one campaign
router.get("/:id", getCampaign);
//get all campaings
router.get("/", getAll);
//update campaign informations
router.put("/:id", auth, updateCampaign);
module.exports = router;
