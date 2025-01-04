// Run: node destructuring.js

const [, , thirdPerson ] = [ 'John', 'Doe', 'Alex', 'Carol' ];
console.log(thirdPerson);

const { name, age } = { name: 'Alexandre', age: '44' };
console.log(`${name} is ${age} years old`);