
function first(array, n) { 
  if (array == null) return [];
  if (n == null) return array[0];  // tester null en premier
  if (n <= 0) return [];
  return array.slice(0, n); 
}

module.exports = { first };
