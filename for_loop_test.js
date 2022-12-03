const Big = require("big.js");

let i = new Big(0);
let m = 100;
let inc = new Big(0.1);
while(Number(i.toString())<m-1) {
  console.log(i.toString())
  i = i.plus(inc)
}
