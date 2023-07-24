// Flatten multi-dimensional array
// node Problem-4.js

const array = ["A", ["A1", "A1"], ["A2", "A2"]];

console.log(array.flat());

//when multilevel array

const array2 = [ "A1",["A1", ["A11"], "A1"], ["A2", "A2", ["A22",["Sazzad"], "A22"]],];
console.log(array2.flat(Infinity));
