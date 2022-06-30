const express = require("express");
const {
  register,
  login,
  getCustomer,
  getAll,
  updateAvatar,
  updateProfile,
  getCurrent,
} = require("../controllers/customerController");
const router = express.Router();
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../middleware/cloudinary");
const auth = require("../middleware/auth");
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Customer_Avatar",
  },
});
const upload = multer({ storage });

//register customer
router.post("/register", register);
//login customer
router.post("/login", login);
//get one customer
router.get("/:id", getCustomer);
//Get all customer
router.get("/",  getAll);
//Update customer avatar
router.put("/updateimg/:id", upload.single("avatar"), auth, updateAvatar);
//Update customer profile
router.put("/:id", auth, updateProfile);
router.get("/current/customer", auth, getCurrent);

module.exports = router;
