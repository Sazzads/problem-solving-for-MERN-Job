// Remove and find falsy values from any array
// node Problem-1.js
//falsy value list : null,undefined,false,NaN,0,-0,0n,"",document.all
const array = [0, false, '', null, undefined, NaN, 42, 'Hello', true, "sazzad", "false", -0];

//remove falsy value
console.log(array.filter(Boolean));

//find falsy value
console.log('the falsy values are:');
console.log(array.filter(item=>!item));
