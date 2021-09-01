const fs = require('fs');

module.exports = (app) => {
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  app.get('/api/notes', (req, res) => {
    return res.json(notes);
  });

  app.post('/api/notes', (req, res) => {
    let notesLast;
    if (notes.length) {
      notesLast = Math.max(...(notes.map(note => note.id)));
    } else {
      notesLast = 0;
    }

    const id = notesLast + 1;

    notes.push({ id, ...req.body });

    res.json(notes.slice(-1));
  });

  app.delete('/api/notes/:id', (req, res) => {
    let locateNote = notes.find(({ id }) => id === JSON.parse(req.params.id));

    notes.splice(notes.indexOf(locateNote), 1);
    res.end("Note deleted");
  });
}
