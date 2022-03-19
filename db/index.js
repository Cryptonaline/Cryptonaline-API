const mongoose = require('mongoose');
const config = require('../config');

async function dbInit() {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log('Connected to database!!');
  } catch (err) {
    console.log(err);
  }
}

module.exports = { dbInit };
