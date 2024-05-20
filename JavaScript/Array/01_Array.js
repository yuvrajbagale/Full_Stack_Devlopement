function moveZerosToEnd(arr) {
  let nonZeros = arr.filter((num) => num !== 0);
  let zeros = arr.filter((num) => num === 0);
  return [...nonZeros, ...zeros];
}

// Example usage:
let array = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(array));
