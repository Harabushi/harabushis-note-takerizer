const router = require('express').Router();
// const req = require('express/lib/request');
const { v4: uuidv4 } = require('uuid');
const { createNote, deleteNote, getNotes } = require ('../../lib/notes')


router.get('/notes', (req, res) => {
  res.json(getNotes());
});

router.post('/notes', (req, res) => {
  const note = req.body;
  note.id = uuidv4();

  createNote(note);

  res.json('Success');
});

router.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  
  deleteNote(id);

  res.json('Success');
});

module.exports = router;