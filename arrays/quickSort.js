const numbersArray = [
  31, 6, 8, 0, 22, 5, -1, 2, 25, 4, -3, 7, 19, 5, 4, 3, -11, 27, 1, 16, -4, 45,
  3, 17, -12,
];
let count = 0;

// O(log2n*n)
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let leftArray = [];
  let rightArray = [];
  let middleIndex = Math.floor(array.length / 2);
  let middleElement = array[middleIndex];
  for (let i = 0; i < array.length; i++) {
    if (i === middleIndex) {
      continue;
    }
    if (array[i] < middleElement) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
    count += 1;
  }

  return [...quickSort(leftArray), middleElement, ...quickSort(rightArray)];
}

console.log("result=", quickSort(numbersArray));
console.log("count=", count);
