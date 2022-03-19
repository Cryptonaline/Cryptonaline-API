const cheerio = require('cheerio');
const axios = require('axios');
const { validateUrl } = require('../utils/validateUrl');
const host = 'https://www.businessinsider.in';
const url = 'https://www.businessinsider.in/cryptocurrency';

module.exports.bInsiderScraper = async () => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const posts = [];
  $('h2.list-bottom-small-title').each(function () {
    const headline = $(this).text();
    const blogUrl = $(this).find('a').attr('href');
    posts.push({ headline, blogUrl: validateUrl(blogUrl, host) });
  });
  return posts;
};
