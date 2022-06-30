const express = require("express");
const {
  register,
  login,
  getInfluencer,
  getAll,
  updateAvatar,
  updateProfile,
} = require("../controllers/influencerController");
const router = express.Router();
const auth = require("../middleware/auth");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../middleware/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Influencer_Avatar",
  },
});
const upload = multer({ storage });
//Register influencer
router.post("/register", register);
//Login influencer
router.post("/login", login);
//Get one influencer
router.get("/:id", getInfluencer);
//Get all influencer
router.get("/", getAll);
//Update influencer avatar
router.put("/updateimg/:id", upload.single("avatar"), auth, updateAvatar);
//Update influencer profile
router.put("/:id", updateProfile);
module.exports = router;
