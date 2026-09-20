/**
 * *Find the smallest of three numbers
 */

let num1 = 1110000;
let num2 = 76300000;
let num3 = 34000;

if (num1 < num2 && num1 < num3) {
  console.log("Number 1 is smallest");
} else if (num2 < num1 && num2 < num3) {
  console.log("Number 2 is smallest");
} else {
  console.log("Number 3 is smallest");
}
