const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../models/Book");

router.post("/api/books", (req, res) => {
  db.create(req.body).then(data => res.json(data));
});

router.delete("/api/books/:id", (req, res) => {
  db.findByIdAndDelete(req.params.id).then(data => {
    res.send(data);
  });
});

router.get("/api/books", (req, res) => {
  db.find({}).then(data => res.json(data));
});

module.exports = router;
