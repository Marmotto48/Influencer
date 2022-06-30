const express = require("express");
const router = express.Router();
const {
  create,
  update,
  get,
  updateImage,
  remove,
} = require("../controllers/interestController");
const auth = require("../middleware/auth");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../middleware/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Interests",
  },
});
const upload = multer({ storage });

router.post("/", upload.single("picture"), auth, create);
router.get("/", get);
router.put("/", auth, update);
router.put("/updateimg/:id", upload.single("picture"), auth, updateImage);
router.delete("/", auth, remove);

module.exports = router;
