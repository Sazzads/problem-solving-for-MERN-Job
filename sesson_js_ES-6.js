//normal function
function fun(x, y) {
    return x + y
}
console.log(fun(2, 3));

//arrow function
const arrowFun = (x, y) => x + y
console.log(arrowFun(3, 3));

//map,find,filter,reduce

const array = [10, 20, 30, 40, 50];
for (let i = 0; i < array.length; i++) {
    console.log(i);
}
for (let i of array) {
    // console.log(i[array]);
}

//map
array.map((i, item, x) => {
    console.log(item, i, x);
})

//find
const findElement = array.find((item) => item === 30)
console.log(findElement);

//filter
const filterElement = array.filter((item) => item > 20)
console.log(filterElement);

//sum of all element of array
let total = 0
for (let item of array) {
    total += item
}
console.log(total);

//reduce
const totals = array.reduce((pre, current) => pre + current, 0)// after comma and zero are optional if you not use the code will run
console.log(totals);

//normal code
const xx = 2;
let result = '';
if (xx >= 5) {
    result = "More then Five"
}
else {
    result = "Less then five"
}
console.log(result);


//ternary operator
const xxx = 6
let results = xxx > 5 ? "More then five" : "Less then five"
console.log(results);

//logical and &&   ---- logical or ||
// ||
const y = 0;
console.log(y || "value of y is false");

// &&
yy = 14
console.log(yy && "value of yy", yy); //if left side true then right side print 

const obj = {
    name: 'x',
    address: {
        home: 'rajshahi'
    }
}
const { address } = obj
console.log(address.home);

const { address: { home } } = obj
console.log(home);

//rest parameter
function rest(...params) {
    console.log(params);
}
rest(1, 2, 3, 4)

//ascending descending
const arr = [5, 7, 3, 4, 0, 8, 1, 6, 2, 9]

const num = 10
const res = (num >= 10) ? (num % 2 === 0) ? 'even number' : 'odd number':'less then 10';
console.log(res);
