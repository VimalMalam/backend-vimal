const express = require("express");
const router = express.Router();

const {
  createForm,
  getForms
} = require("../controllers/formController");

router.post("/submit", createForm);
router.get("/forms", getForms);

module.exports = router;
