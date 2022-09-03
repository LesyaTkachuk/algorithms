const numbersArray = [
  31, 6, 8, 0, 22, 5, -1, 2, 25, 4, -3, 7, 19, 5, 4, 3, -11, 27, 1, 16, -4, 45,
  3, 17, -12,
];
let count = 0;

// O(1/2*n*n)=> O(n*n)
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    let temporary = array[i];
    array[i] = array[indexMin];
    array[indexMin] = temporary;
  }
  return array;
}

console.log("result=", selectionSort(numbersArray));
console.log("count=", count);
