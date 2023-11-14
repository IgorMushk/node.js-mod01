//console.log("Hello Word!!!");

//setInterval(()=>console.log("Hello Word!"),1000);
//setTimeout(()=>console.log("Hello Word! -1000 ms"),1000);

// const fs = require("node:fs");

// console.log(fs);

/*
const fs = require("node:fs/promises");

// прикол - хак чтобы обойти
(async() => {
    const content = await fs.readFile('text.txt');
    console.log(Buffer.from('Hello'));
    console.log(content);
    console.log(content.toString());
})()
*/
// async await нужно оборачивать в try - catch

// async function foo() {};
// foo();


const fs = require('node:fs');

fs.readFile('text.txt', (error,data) => {
console.log('error', error)
console.log('data', data);
})


const text = fs.readFileSync('text.txt');
console.log('readFileSync',text);