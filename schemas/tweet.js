const mongoose = require('mongoose');

const tweetsSchema = new mongoose.Schema(
  {
    tweet: String,
    tweet_link: String,
    twitter_id: String,
    username: String,
    tweet_date: String,
    user_image_url: String,
    category: {
      type: String,
      default: 'tweet',
    },
  },
  { timestamps: true }
);

const Tweet = mongoose.model('Tweet', tweetsSchema);

module.exports = {
  Tweet,
};
