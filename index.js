function sum(arr) {
  let total = 0;
  for (const n of arr) {
    total += n;
  }
  return total;
}


// Test Cases
console.log(sum([1,2,3]))
