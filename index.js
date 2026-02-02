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

// Test Cases
console.log("Sum:" + sum([1,2,3]))
console.log("Avg:" + average([1,2,3]))
console.log("Min:" + min([1,2,3]))