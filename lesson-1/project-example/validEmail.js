const validator = require("validator");

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  "Is mii@ukr.net a valid email?: ",
  validateEmail("mii@ukr.net")
);

console.log(
  "Is ukr.net a valid email?: ",
  validateEmail("ukr.net")
);