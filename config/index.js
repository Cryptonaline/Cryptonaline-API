if (process.env.NODE_ENV !== 'production') {
  const config = require('dotenv').config();
  if (config.error) {
    throw new Error('.env missing');
  }
  module.exports = {
    ...config.parsed,
  };
}
