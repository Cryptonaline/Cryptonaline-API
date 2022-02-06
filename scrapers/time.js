const cheerio = require('cheerio');
const axios = require('axios');
const url = 'https://time.com/nextadvisor/investing/cryptocurrency/';

module.exports.timeScraper = async () => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const posts = [];
  $('h3.vertical-posts__title').each(function () {
    const headline = $(this).text();
    const blogUrl = $(this).find('a').attr('href');
    posts.push({ headline, blogUrl });
  });
  return posts;
};
