//Finding the maximum and minimum numbers in an array:

// function maxAndMin(array) {
//   const maxArray = Math.max(...array);
//   const minArray = Math.min(...array);

//   return { MaxArray: maxArray, MinArray: minArray };
// }

// console.log(maxAndMin([1, 2, 3, 6, 44, 5, 5, 4, 8, 41, 5, 1]));

array=[1, 2, 3, 6, 44, 5, 5, 4, 8, 41, 5, 1]
maxArray=Math.max(...array)
minArray=Math.min(...array)
console.log("Max Array: ",maxArray);
console.log("Min Array: ",minArray);