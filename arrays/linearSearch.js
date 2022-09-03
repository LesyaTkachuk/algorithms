const numbersArray = [
  31, 6, 8, 0, 22, 5, 2, 25, 4, 7, 19, 5, 4, 3, 27, 1, 16, 45, 3, 17,
];

// O(n)
let count = 0;
function linearSearch(array, number) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === number) return i;
  }
  return null;
}

console.log(linearSearch(numbersArray, 17));
console.log("count=", count);
