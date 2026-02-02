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


// Test Cases
console.log(sum([1,2,3]))
console.log(average([1,2,3]))

