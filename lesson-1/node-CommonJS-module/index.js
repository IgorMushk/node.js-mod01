// CommonJS
//const nodemon = require("nodemon");

//const users = require("./users");
//console.log(users);

// т.к. export default - import by other name
const obj = require("./users");
console.log(obj);

const {admins} = require("./users");
console.log(admins);

// const {getCurrentMonth}  =require("./date");
// const currentMonth = getCurrentMonth();
// console.log(` Now ${currentMonth} month`);

const currentMonth =  require("./date").getCurrentMonth();
console.log(` Now ${currentMonth} month`);