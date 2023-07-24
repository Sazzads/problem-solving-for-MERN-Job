//Finding the given factorial number

const factorial = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  }
  else {
    // return number * factorial(number - 1);
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result = result * i
    }
    return result
  }
}

console.log(factorial(5));
// 5!= 5*4*3*2*1=120
