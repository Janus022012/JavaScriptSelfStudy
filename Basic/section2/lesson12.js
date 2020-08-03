
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn= 1.95;

let BMIMark = massMark / (heightMark ** 2);
let BMIJohn = massJohn / (heightJohn ** 2);

let markHigherBMI = BMIMark > BMIJohn;
console.log("Result: " + markHigherBMI);