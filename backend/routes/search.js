const express = require("express");
const router = express.Router();
const fs = require("fs");


const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));

router.post("/", (req, res) => {
  const { query, destinationId } = req.body;

  if (destinationId === undefined || query === undefined) {
    return res.status(400).json({ error: "Missing query or destinationId" });
  }

  const destination = db.destination.find(dest => dest.id === destinationId);
  if (!destination) {
    return res.status(404).json({ error: "Destination not found" });
  }

  // Фильтруем отели по городу destination и query
  const results = db.hotels.filter(hotel => {
    return (
        hotel.city.toLowerCase() === destination.label.toLowerCase() &&
        hotel.name.toLowerCase().includes(query.toLowerCase())
    );
  });

  res.json(results);
});

module.exports = router;
