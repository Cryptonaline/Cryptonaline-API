const cheerio = require('cheerio');
const axios = require('axios');
const { validateUrl } = require('../utils/validateUrl');
const host = 'https://www.businessinsider.in';
const url = 'https://www.businessinsider.in/cryptocurrency';

const urls = [];
const posts = [];

async function getDataByPost() {
  for (let post_link of urls) {
    let post_description = '';
    let post_title = '';
    const { data } = await axios.get(post_link);
    const $ = cheerio.load(data);
    $('h1').each(function () {
      post_title = $(this).text();
    });
    $('div.main_content').each(function () {
      post_description = $(this).text();
    });
    $('source').each(function () {
      image_url = validateUrl($(this).attr('srcset'), host);
    });

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

module.exports.bInsiderScraper = async () => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  $('h2.list-bottom-small-title').each(function () {
    const blogUrl = $(this).find('a').attr('href');
    urls.push(validateUrl(blogUrl, host));
  });
  return getDataByPost();
};
