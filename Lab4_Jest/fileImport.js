// fileImport.js
const { mean } = require('./notation');

const s1 = [12, 14, 16, 10];
const m1 = mean(s1);

const s2 = [20, 18];
const m2 = mean(s2);

module.exports = { s1, s2, m1, m2 };
