const tail = require("../tail");
const assert = require("chai").assert;
// const words = ["Yo Yo", "Lighthouse" , "Labs"];

describe("#tail", () =>{
  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse , Labs]", () =>{
    assert.deepEqual(tail(["Yo Yo", "Lighthouse" , "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [Milo, Roman] for [Luna, Milo, Roman]", () =>{
    assert.deepEqual(tail(["Luna", "Milo" , "Roman"]), ["Milo", "Roman"]);
  });
});




// let newArray = tail(words);
// console.log(words);
// console.log(assertEqual(words.length, 3));
// console.log(newArray);