const cheerio = require('cheerio');
const axios = require('axios');
const { validateUrl } = require('../utils/validateUrl');

const host = 'https://time.com';
const url = 'https://time.com/nextadvisor/investing/cryptocurrency/';

const urls = [];
const posts = [];

async function getDataByPost() {
  for (const post_link of urls) {
    let post_description = '';
    let post_title = '';
    let image_url = '';
    const { data } = await axios.get(post_link);
    const $ = cheerio.load(data);
    post_title = $('h1.post__heading').text();
    post_description = $('div.post__body').text();
    image_url = $('picture').find('source').attr('srcset');

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

module.exports.timeScraper = async () => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  $('h3.vertical-posts__title').each(function () {
    const blogUrl = $(this).find('a').attr('href');
    urls.push(validateUrl(blogUrl, host));
  });
  return getDataByPost();
};
