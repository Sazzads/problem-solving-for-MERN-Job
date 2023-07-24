//shuffling arrays
//node Problem-12.js

const array = [1, 2, 3, 3, 5, 6, 7, 8, 9, 10, 11, 12];
const shufflingArray = array.sort(() => Math.random() - 0.5);

console.log(shufflingArray);
