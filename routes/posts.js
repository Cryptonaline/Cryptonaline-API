const express = require('express');
const router = express.Router();
const {
  livemintScraper,
  bInsiderScraper,
  timeScraper,
} = require('../scrapers');

router.get('/', async (req, res) => {
  let posts = [];
  // const livemintPosts = await livemintScraper();
  const bInsiderPosts = await bInsiderScraper();
  // const timePosts = await timeScraper();
  // TODO: add more scrapers
  posts = [...bInsiderPosts];
  res.send({ posts });
});

module.exports = router;
