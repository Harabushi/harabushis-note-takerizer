const notes = require('../db/db.json');
const fs = require('fs');
const path = require("path");

const createNewNote = function (newNote) {
  const note = newNote;

  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: noteArray})
  )
}

module.exports = createNewNote