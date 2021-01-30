const lazyload = require('norska/frontend/lazyload');
const themeConfig = require('./_scripts/themeConfig.js');

module.exports = {
  async init(options = {}) {
    themeConfig.options = { ...themeConfig.options, ...options };

    lazyload.init();
  },
};
