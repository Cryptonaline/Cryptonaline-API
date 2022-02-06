const PORT = 4000;
const express = require('express');
const { livemintScraper } = require('./scrapers/livemint');

const app = express();

app.get('/', async (req, res) => {
  const posts = await livemintScraper();
  res.send({ posts });
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
