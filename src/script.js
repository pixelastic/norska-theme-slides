const lazyload = require('norska/frontend/lazyload');
const themeConfig = require('./_scripts/themeConfig.js');
const styling = require('./_scripts/styling.js');
const keyboard = require('./_scripts/keyboard.js');
const highlight = require('./_scripts/highlight.js');

module.exports = {
  async init(options = {}) {
    themeConfig.options = { ...themeConfig.options, ...options };

    document.addEventListener('DOMContentLoaded', () => {
      styling.init();
      keyboard.init();
      highlight.init();
      lazyload.init();
    });
  },
};
