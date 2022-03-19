const pattern =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const performConversion = (url, host) => {
  return host.concat(url);
};

const validateUrl = (url, host) => {
  return url.match(pattern) ? url : performConversion(url, host);
};

module.exports = {
  validateUrl,
};
