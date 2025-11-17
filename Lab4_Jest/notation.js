// notation.js
function mean(scores) {
  if (!Array.isArray(scores) || scores.length === 0) return null;
  const sum = scores.reduce((a, b) => a + b, 0);
  return sum / scores.length;
}

module.exports = { mean };
