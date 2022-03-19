const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema(
  {
    post_title: String,
    post_description: String,
    post_link: String,
    post_source: String,
    image_url: String,
    category: {
      type: String,
      default: 'post',
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postsSchema);

module.exports = {
  Post,
};
