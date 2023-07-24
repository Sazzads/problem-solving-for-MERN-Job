//compare two arrays by value
//node Problem-17.js


const hasSameElements = (a, b) => {
  return a.length == b.length && a.every((value,index)=>value==b[index])
}

console.log(hasSameElements([1,2],[1,2]));