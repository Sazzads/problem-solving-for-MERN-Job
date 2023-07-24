//Check performance time for the task
//node Problem-7.js

const starttime = performance.now();

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const endtime = performance.now();

console.log(`Performance value is : ${endtime - starttime}`);
