const express = require('express');
const router = express.Router();
const {
  livemintScraper,
  bInsiderScraper,
  timeScraper,
} = require('../scrapers');
const { postsController } = require('../controllers');

router.get('/', async (req, res) => {
  let posts = [];
  // TODO: break them into seperate routes for example: /livemint etc
  const livemintPosts = await livemintScraper();
  const bInsiderPosts = await bInsiderScraper();
  const timePosts = await timeScraper();
  posts = [...timePosts, ...bInsiderPosts, ...livemintPosts];
  await postsController(posts);
  res.send({ posts });
});

module.exports = router;
