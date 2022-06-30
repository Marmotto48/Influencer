const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getBrand,
  create,
  getAll,
  updateBrand,
  deleteBrand,
  logo,
} = require("../controllers/brandController");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../middleware/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Brands_Logo",
  },
});
const upload = multer({ storage });

//Create new Brand
router.post("/", create);
//Get all Brands
router.get("/", getAll);
//Get one Brand
router.get("/:id", getBrand);
//Update Brand information
router.put("/:id", auth, updateBrand);
//Update Brand information
router.put("/logo/:id", upload.single("logo"), auth, logo);
//Delete Brand
router.delete("/:id", auth, deleteBrand);
module.exports = router;
