function sum(arr) {
  let total = 0;
  for (const n of arr) {
    total += n;
  }
  return total;
}

function average(arr) {
  return sum(arr) / arr.length;
}

function min(arr) {
  let min = arr[0];

  for (const n of arr) {
    if (n < min) {
      min = n;
    }
  }
  return min;
}

function max(arr) {
  let max = arr[0];

  for (const n of arr) {
    if (n > max) {
      max = n;
    }
  }
  return max;
}

// Test Cases
console.log("Sum:" + sum([1,2,3]))
console.log("Avg:" + average([1,2,3]))
console.log("Min:" + min([1,2,3]))
console.log("Max:" + max([1,2,3]))