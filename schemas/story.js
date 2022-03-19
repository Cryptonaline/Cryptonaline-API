const mongoose = require('mongoose');

const storiesSchema = new mongoose.Schema(
  {
    story_title: String,
    story_link: String,
    image_url: String,
    category: {
      type: String,
      default: 'story',
    },
  },
  { timestamps: true }
);

const Story = mongoose.model('Story', storiesSchema);

module.exports = {
  Story,
};
