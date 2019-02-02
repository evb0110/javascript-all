import { person } from './lib';

console.log(person.age);

const R = require('ramda');

console.log(R.add(7)(10));

const double = x => x + x;
const square = x => x * x;

const doubleSquare = R.pipe(double, square);
console.log(doubleSquare(5));