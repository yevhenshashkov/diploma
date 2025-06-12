const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  const city = req.query.city;
  const filtered = city
      ? db.hotels.filter((hotel) => hotel.city === city)
      : db.hotels;
  res.json(filtered);
});

module.exports = router;


