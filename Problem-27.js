//Reversing an string without using the built-in reverse() method:
function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
// const string = "niassoH dazzaS"

// const result = reverseString(string);
console.log("niassoH dazzaS");