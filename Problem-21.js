//Sorting an array of numbers in ascending and descending order:


function sortArrayasc(number) {
  return number.sort((a, b) => a - b);
}
console.log(sortArrayasc([2, 1, 4, 2, 3]));


function sortArraydsc(number) {
  return number.sort((a, b) => b - a);
}
console.log(sortArraydsc([2, 1, 4, 2, 3]));
