const tail = require("../tail");
const assertEqual = require("../assertEqual");
const words = ["Yo Yo", "Lighthouse" , "Labs"];


let newArray = tail(words);
console.log(words);
console.log(assertEqual(words.length, 3));
console.log(newArray);