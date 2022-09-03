const sortedNumbersArray = [
  1, 3, 5, 6, 7, 8, 10, 11, 14, 16, 17, 19, 21, 24, 26, 29, 32, 35, 37, 39, 43,
  46, 48, 53,
];
let count1 = 0;

// O(log2N)
function binarySearch(array, number) {
  let middle;
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    count1 += 1;
    if (array[middle] === number) {
      return middle;
    }
    if (number < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return null;
}

console.log("result1=", binarySearch(sortedNumbersArray, 53));
console.log("count1=", count1);

let count2 = 0;
function recursiveBinarySearch(array, number, start, end) {
  let middle = Math.floor((start + end) / 2);
  count2 += 1;

  if (array[middle] === number) {
    return middle;
  }
  if (array.length === 0) {
    return null;
  }

  if (number < array[middle]) {
    return recursiveBinarySearch(array, number, start, middle - 1);
  } else {
    return recursiveBinarySearch(array, number, middle + 1, end);
  }
}

console.log(
  "result2=",
  recursiveBinarySearch(
    sortedNumbersArray,
    53,
    0,
    sortedNumbersArray.length - 1
  )
);
console.log("count2=", count2);
