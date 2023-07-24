// Function with a callback
function addition(num1, num2, callback) {

  console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`)
  callback()
}
function notification() {
  console.log("the sum program is done")
}
function message() {
  console.log("example of callbacks: ")
}
message()
addition(2, 3, notification)