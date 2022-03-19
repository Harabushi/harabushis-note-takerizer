let notes = require('../db/db.json');
const fs = require('fs');
const path = require("path");

const getNotes = () => notes;

const createNote = function (newNote) {
  notes.push(newNote);
  saveNotes(notes);
}

const deleteNote = function (id) {
  const filteredNotes = notes.filter(note => note.id != id);
  notes = filteredNotes;
  saveNotes(filteredNotes);
}

const saveNotes = notes => 
  fs.writeFileSync(
  path.join(__dirname, '../db/db.json'),
  JSON.stringify(notes, null, 2)
);

module.exports = { createNote, deleteNote, getNotes }