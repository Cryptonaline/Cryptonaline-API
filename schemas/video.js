const mongoose = require('mongoose');

const videosSchema = new mongoose.Schema(
  {
    video_title: String,
    video_link: String,
    thumbnail: String,
    category: {
      type: String,
      default: 'video',
    },
  },
  { timestamps: true }
);

const Video = mongoose.model('Video', videosSchema);

module.exports = {
  Video,
};
