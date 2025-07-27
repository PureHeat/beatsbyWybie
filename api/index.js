const express = require('express');
const cors = require('cors');
const beats = require('./mock-data');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Beats by Wybie API!');
});

app.get('/api/beats', (req, res) => {
  res.json(beats);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
