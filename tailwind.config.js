/* eslint-disable */
const config = require('norska-css/lib/tailwind');

const fontSize = {
  0: '0rem',
  '0001': '0.5rem',
  '001': '1rem',
  '01': '1.5rem',
  1: '2rem',
  2: '2.5rem',
  3: '3rem',
  4: '3.75rem',
  5: '4.5rem',
  6: '6rem',
  7: '8rem',
  8: '12rem',
  9: '16rem',
  10: '20rem',
  11: '24rem',
};

const newConfig = {
  ...config,
  theme: {
    ...config.theme,
    fontSize,
  }
}

module.exports = newConfig;
