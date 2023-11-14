//const fs = require("fs/promises");
//const fs = require("fs").promises;

/*
const readFile = async() => {
    const text = await fs.readFile("./files/file.txt", "utf-8");
    console.log(text);
    // const buffer = await fs.readFile("./files/file.txt");
    // const text = buffer.toString();
    // console.log(text)
}

readFile()
*/
/*
const addText = async()=> {
    await fs.appendFile("./files/file2.txt", "\nТак говорил Заратустра");
}

addText();
*/
/*
const replaceText = async()=> {
    const result = await fs.writeFile("./files/file3.txt", "Ницше");
    console.log(result);
}

replaceText();
*/
// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// fs.readFile("./files/file.txt", (error, data) => {
//     console.log(error);
//     console.log(data);
// })

// ========================================================
// const fs =require("fs");

// fs.readFile("./files/file.txt", (error, data) =>{
//   console.log(error);
//   console.log(data);
// })

//const fs =require("fs/promises");
const fs =require("fs").promises;

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message));

// const fileOperation = async()=> {
//     const data = await fs.readFile("./files/file.txt","utf8")
//     console.log(data);
// }

// fileOperation();

// const readFile = async()=> {
//     const data = await fs.readFile("./files/file.txt")
//     console.log(data);
// }

// readFile();

/*
const readFile = async()=> {
    const text = await fs.readFile("./files/file.txt", "utf-8");
    // const buffer = await fs.readFile("./files/file.txt")
    // const text = buffer.toString()
    console.log(text);
}

readFile();
*/

/*
const addTExt = async() => {
    const result =await fs.appendFile("./files/file2.txt", "\nТак говорил Заратустра");
    console.log(result);
}

addTExt();
*/

const replaceText = async() => {
    const result = await fs.writeFile("./files/file3.txt", "Ницше2");
    console.log(result);
}

replaceText();


