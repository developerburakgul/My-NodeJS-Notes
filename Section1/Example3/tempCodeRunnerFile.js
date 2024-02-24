const validator = require("validator");
var isEmail = validator.isEmail("developerburak@btu.edu.tr")
console.log("isEmail's vlaue is : " + isEmail);
var isEmail2 = validator.isEmail("developerburak.btu.edu.tr")
console.log("isEmail2's vlaue is : " + isEmail2);