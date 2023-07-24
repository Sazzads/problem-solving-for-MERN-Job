//Convert any value to boolean and convert falsy value to truthy and truthy value to falsy
//node Problem-2.js

//falsy value list : null,undefined,false,NaN,0,-0,0n,"",document.all


const name="sazzad"
console.log(typeof(name));
console.log(typeof(!!name));

const a=null
console.log(Boolean(a));
console.log(Boolean(!a));