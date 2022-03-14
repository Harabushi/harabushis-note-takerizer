const router = require('express').Router();
// const req = require('express/lib/request');
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const createNewNote = require ('../../lib/notes')


router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  req.body.id = uuidv4();

  res.json(req.body);
  const noteList = createNewNote(req.body);
  // res.json(noteList);
});

module.exports = router;