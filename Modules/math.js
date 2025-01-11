console.log(`Inside Math.js`);

require(`./test.js`); //inside class.js -> inside test.js

require(`./class.js`); //inside class.js

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const division = (a, b) => a / b;
const multiplication = (a, b) => a * b;

const showPassword = (password) => {
  console.log(password);
};

const pi = 3.14;

module.exports = {
  add,
  sub,
  division,
  multiplication,
  pi,
};

// console.log(add(2, 5));
// console.log(sub(2, 5));
