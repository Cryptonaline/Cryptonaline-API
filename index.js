const PORT = 4000;
const express = require('express');
const { livemintScraper, bInsiderScraper, timeScraper } = require('./scrapers');

const app = express();

app.get('/', async (req, res) => {
  let posts = [];
  const livemintPosts = await livemintScraper();
  const bInsiderPosts = await bInsiderScraper();
  const timePosts = await timeScraper();
  posts = [...livemintPosts, ...bInsiderPosts, ...timePosts];
  res.send({ posts });
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
