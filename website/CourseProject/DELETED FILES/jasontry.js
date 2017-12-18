console.log('App starting....')

const user = { name: 'Alice', age: 38 };
const userStr = JSON.stringify(user);
console.log(typeof userStr);
console.log(userStr);


const person = JSON.parse(userStr);
console.log(typeof person);
console.log(person);