const arr = [1, 4, 8, 9];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

function getMaxElement(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[1];
    }
  }
  return max;
}

function getMinElement(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[1];
    }
  }
  return min;
}

function getAverage(arr) {
  let sum = 0;
  for (let i = 1; i < array.length; i++) {
    sum += arr[i];
  }
  return sum / array.length;
}

function getSumOfEven(array) {
  let sum = 0;
  for (let i = 1; i < array.length; i = i + 2) {
    sum += array[i];
  }
  return sum;
}
