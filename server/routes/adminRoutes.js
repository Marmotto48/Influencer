const express = require("express");
const {
  register,
  login,
  getAdmin,
  getAll,
  updateAvatar,
  updateProfile,
  deleteAdmin,
} = require("../controllers/adminController");
const router = express.Router();
const auth = require("../middleware/auth");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../middleware/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Admin_Avatar",
  },
});
const upload = multer({ storage });
//Register Admin
router.post("/register", register);
//Login Admin
router.post("/login", login);
//Get one Admin
router.get("/:id", getAdmin);
//Get all Admin
router.get("/", getAll);
//Update Admin avatar
router.put("/updateimg/:id", upload.single("avatar"), auth, updateAvatar);
//Update Admin profile
router.put("/:id", updateProfile);
//Update Admin profile
router.delete("/:id", auth, deleteAdmin);
module.exports = router;
