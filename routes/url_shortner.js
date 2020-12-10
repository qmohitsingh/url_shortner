const express    = require("express");
const router     = express.Router();

const controller = require('../modules/url_shortner')

router.get("/getShortenedURL/:clientId/:url(*)",    controller.getShortenedURL);

router.get("/getOriginalURL/:url(*)",               controller.getOriginalURL);

router.get("/getStatisticsUsage",                   controller.getStatisticsUsage)


module.exports = router;