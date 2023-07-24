//Calculating the sum of all numbers in an array:

// function CalculatingSumOfarray(array) {
//   let sum = 0;
//   for (let num of array) {
//     sum = sum + num;
//   }
//   return sum;
// }

// console.log(CalculatingSumOfarray([1, 2, 3, 2]));

const array = [1, 2, 3, 4, 5]
let sum = 0
for (let num of array) {
  sum = sum + num
}
console.log(sum);
