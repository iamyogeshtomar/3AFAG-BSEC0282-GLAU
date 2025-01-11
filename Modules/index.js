// console.log(__dirname);

// const math = require(`./math.js`);

// console.log(`Inside index.js`);

// require(`./test.js`); //inside class.js -> inside test.js

// require(`./class.js`); //inside class.js

// console.log(add(2, 5));

// console.log(math);

// console.log(math.add(2, 5));

// console.log(module);

const Person = require(`./class.js`);

// const Anurag = require(`./class`);
// const Mohit = require(`./class`);
// const Prashant = require(`./class`);

const Anurag = new Person();
const Mohit = new Person();
const Prashant = new Person();

Anurag.setName = `Anurag`;
Mohit.setName = `Mohit`;
Prashant.setName = `Prashant`;

console.log(Anurag.getName);
console.log(Mohit.getName);
console.log(Prashant.getName);
