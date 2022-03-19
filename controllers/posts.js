const { Post } = require('../schemas/post');

async function postsController(posts) {
  await Post.deleteMany({});
  await Post.create(posts);
}

module.exports = {
  postsController,
};
