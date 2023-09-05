const express = require("express");
const router = express.Router();
// contact route
router.get("/contact", (req, res) => {
  res.send("Hello from Contact");
});

module.exports = router;
