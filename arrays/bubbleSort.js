const numbersArray = [
  31, 6, 8, 0, 22, 5, -1, 2, 25, 4, -3, 7, 19, 5, 4, 3, -11, 27, 1, 16, -4, 45,
  3, 17, -12,
];
let count = 0;

// O(n*n)
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      count += 1;
    }
  }
  return array;
}

console.log("result=", bubbleSort(numbersArray));
console.log("count=", count);
