const express = require('express');

const router = express.Router();
const {
  livemintScraper,
  bInsiderScraper,
  timeScraper,
} = require('../scrapers');
const { postsController } = require('../controllers');

router.get('/livemint', async (req, res) => {
  const livemintPosts = await livemintScraper();
  await postsController(livemintPosts);
  res.send(livemintPosts);
});

router.get('/businessinsider', async (req, res) => {
  const bInsiderPosts = await bInsiderScraper();
  await postsController(bInsiderPosts);
  res.send(bInsiderPosts);
});

router.get('/time', async (req, res) => {
  const timePosts = await timeScraper();
  await postsController(timePosts);
  res.send(timePosts);
});

module.exports = router;
