const fs = require('fs');
const myData = [
    { name: 'Alice', age: 25 },
    { name: 'bob', age: 37 },
]; //array

const data = JSON.stringify(myData);
fs.writeFile('./t.json', data, (err, res) => {
    if (err) {
        console.log(`Error: ${err}`)
    } else {
        console.log('succeeded')
    }
});