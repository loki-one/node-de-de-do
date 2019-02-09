// const person = require('./person'); <- Common JS 
// why not use import Person from './person' ?
// because it is ES6 syntax and runs in browser.
// and node has not implemented this and hence will throw error.
// To make this work we have to use Babel.
// console.log(person);

const Person = require('./personClass');

const person1 = new Person('Loki', 30);

person1.greeting();