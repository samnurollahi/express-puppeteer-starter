const { Router } = require("express");

const GoogleScrap = require("../service/pup/scraper/google.scaper");

const scraper = new GoogleScrap();

const router = new Router();

router.get("/", async (req, res) => {
  await scraper.searchInGoogle();
  res.send("<center><h1>hello</h1></center>");
});

module.exports = router;
