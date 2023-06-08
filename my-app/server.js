const express = require("express");
const app = express();
const PORT = 3003;
const knex = require("./src/db/index");

// const bodyParser = require('body-parser');
// const path = require("path");

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} !`);
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname,"./build")));

app.get('/notes', async (req, res) => {
    try {
      const notes = await knex.from('notes').select('*');
      console.log(notes);
      res.status(200).send(notes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
});

  // app.post('/notes', async (req, res) => {
  //   try {
  //     const { id, title, content, updateDay } = req.body;
  //     const note = await knex('notes').insert({ id, title, content, updateDay }).returning('*');
  //     res.json(note);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Server error' });
  //   }
  // });
  