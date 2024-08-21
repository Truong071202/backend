const express = require("express");
const { getHomepage, getABC } = require("../controllers/homeController");
const router = express.Router();

//khai bao route
router.get("/", getHomepage);

router.get("/abc", getABC);

module.exports = router;
