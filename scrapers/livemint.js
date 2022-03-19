const cheerio = require('cheerio');
const axios = require('axios');
const { validateUrl } = require('../utils/validateUrl');

const host = 'https://www.livemint.com';
const url = 'https://www.livemint.com/Search/Link/Keyword/Cryptocurrency';

const urls = [];
const posts = [];

async function getDataByPost() {
  for (const post_link of urls) {
    let post_description = '';
    let post_title = '';
    let image_url = ''
    const { data } = await axios.get(post_link);
    const $ = cheerio.load(data);
    post_title = $('h1.headline').text();
    post_description = $('div.mainArea').text();
    image_url = $('picture').find('img').attr('src');

    posts.push({
      post_title,
      post_link,
      post_description,
      image_url,
      post_source: host,
    });
  }
  return posts;
}

module.exports.livemintScraper = async () => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  $('h2.headline').each(function () {
    const blogUrl = $(this).find('a').attr('href');
    urls.push(validateUrl(blogUrl, host));
  });

  return getDataByPost();
};
