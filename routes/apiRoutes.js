const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
const util = require("util");
const readFile = util.promisify(fs.readFile);

//api route for notes
router.get("/notes", (req, res) => {
 readFile("./db/db.json","utf-8") 
    .then((data) => {
      let notes = JSON.parse(data)
      console.log(notes)
      res.json(notes)
    })
});

router.post("/notes", (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db));

  res.json(db);
});

router.delete("/notes/:id", (req, res) => {
  let id = req.params.id;
  for (i = 0; i < db.length; i++) {
    if (db[i].id === id) {
      db.splice(i, 1);
    }
  }

  deleteNotes = db;
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(db);
});

module.exports = router;