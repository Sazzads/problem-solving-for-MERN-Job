//let,const
// const x=5;
// x=7

// let x=5;
// let x=6;

// let name='mehedi'
// let age=25
// console.log();

// const a = [10, 20, 30, 40, 50]
// for (let x = 0; x < a.length; x++) {
//     console.log(a[x]);
// }

// for(let i=a.length-1; i>=0; i--){
//     console.log("reverse",a[i]);
// }
const aa = [10, 20, 30, 40, 50]

//const b=aa; //batt
const b = [...aa]
b.push(60)
b.push(70)
b.push(80)
console.log(b);
console.log(aa);

// let x=aa[0]
// let y=aa[1]
// let z=aa[2]

const [x, y, ...z] = aa
console.log(x, y, z);



//object

const obj = {
    name: 'sazzad',
    age: 25,
    address: 'tangail'
}
console.log(obj.name);
console.log(obj['name']);

const prop = 'name';
console.log(obj[prop]);

const obj2 = { ...obj }
obj2.phone = 1733439812;
console.log(obj);
console.log(obj2);


//functgion

//types of function

//1 .No parameters and no return type
function myFunc1() {
    console.log("MY function");
}
myFunc1()

//2.parameters with no resturn type
function myFunc2(x, y) {
    console.log(x + y);
}
myFunc2(4, 5)

//3. no parameters with resturn type
function myFunc3() {
    let taka = 500
    return taka
}
console.log(myFunc3());

//4.Parameters and  return type
function myFunc4(x, y) {
    const total = (x + y);
    return total;
}
let myTotal = myFunc4(6, 5)
console.log(myTotal);

// default parameter for error handle
function myFunc5(x = 0, y = 0) {
    const total = (x + y);
    return total;
}
let myTotals = myFunc5(6)
console.log(myTotals);


