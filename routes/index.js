var express = require('express');
var router = express.Router();
var repoContent = require("../controllers/repoContent");

/* GET home page. */
router.get("/", function (req, res) {
  res.status(200).json({
    status: 404,
    message: "Welcome to Cogzidel"
  });
});

router.post("/slack", repoContent.slacktok);
router.post("/slackUser", repoContent.slackUser);
module.exports = router;
