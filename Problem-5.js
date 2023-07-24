//Make any short condition using Short conditonals
// node Problem-5.js

const myName = "Sazzad";

//regular 
if (myName === "Sazzad") {
    console.log("Your Name is", myName);
}
else {
    console.log("wrong name");
}

//make short with using &&
myName === "Sazzad" && console.log("Your Name is", myName);

myName === "Sazzad" ? console.log("Your Name is", myName) : console.log("wrong name");

myName === "Sazza" || console.log("wrong name");