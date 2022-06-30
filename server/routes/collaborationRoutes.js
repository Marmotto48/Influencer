const express = require("express");
const {
  create,
  getAll,
  getCollaboration,
  deleteCollaboration,
} = require("../controllers/collaborationController");
const router = express.Router();
const auth = require("../middleware/auth");

//Create new collaboration
router.post("/", auth, create);
//Get all Company
router.get("/", getAll);
//get one collaboration
router.get("/:id", getCollaboration);
//delete collaboration
router.delete("/:id", auth, deleteCollaboration);
module.exports = router;
