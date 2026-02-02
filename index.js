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

function capitalize(str) {
  if (str.length == 1) {
    return str.toUpperCase();
  }

  else {
  return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

function countVowels(str) {
 vowels = ['a', 'e', 'i', 'o', 'u'];
 let count = 0;

 for (const char of str.toLowerCase()) {
  if (vowels.includes(char)) {
    count += 1;
    }
 }

 return count;   

}

function reverse(str) {
  return str.split('').reverse().join('');
}

const student = {

name: "Kevins Cadet",
age: 20,
grades: [85, 90, 78],

getAverage: function() {
    return average(this.grades);
},

isHonorRoll: function() {
    return this.getAverage() >= 85;
}

}

// Array Functions Text Cases
console.log("Sum:" + sum([1,2,3]))
console.log("Avg:" + average([1,2,3]))
console.log("Min:" + min([1,2,3]))
console.log("Max:" + max([1,2,3]))

// String Functions Test Cases
console.log("Cap:" + capitalize("hello"))
console.log("Cap:" + capitalize("w"))
console.log("Vowels:" + countVowels("hello"))   
console.log("Vowels:" + countVowels("gym"))
console.log("Reverse:" + reverse("hello"))
console.log("Reverse:" + reverse("w"))

// Object Test Cases
console.log("Student Name:" + student.name)    
console.log("Student Age:" + student.age)
console.log("Student Grades:" + student.grades)
console.log("Student Average:" + student.getAverage())
console.log("Is Honor Roll:" + student.isHonorRoll())
console.log(student);
