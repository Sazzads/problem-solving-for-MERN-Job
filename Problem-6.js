//Replace word or array element 
//node Problem-6.js

const text ="React is a popular Javascript framework.";

console.log(text.replace(/framework/g ,"library").replace(/React/g,"REACT"));


const array=["1","2","3","4","5"];
const newArray=array.map(item=>item==="3"?"sazzad":item)
console.log(newArray);
