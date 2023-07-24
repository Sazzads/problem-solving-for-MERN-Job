//array swappings and varriable value swappings
// node Problem-8.js
const array = [0,1,2,3,4,5,6,7,8,9];

[array[0], array[9]] = [array[9], array[0]];

console.log(array);

//value swappings
let num1=100;
let num2=200;

console.log(`Before swappings num1 is: ${num1} And Num2 is : ${num2}`);

[num1,num2]=[num2,num1]

console.log(`After swappings num1 is: ${num1} And Num2 is : ${num2}`);

