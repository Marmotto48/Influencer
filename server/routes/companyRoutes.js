const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getCompany,
  create,
  getAll,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");

//Create new Company
router.post("/", create);
//Get all Company
router.get("/", getAll);
//Get one Company
router.get("/:id", getCompany);
//Update Company information
router.put("/:id", updateCompany);
//Delete Company
router.delete("/:id", auth, deleteCompany);
module.exports = router;
