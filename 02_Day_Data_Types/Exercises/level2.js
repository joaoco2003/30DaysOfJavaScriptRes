console.log("The quote \"There is no exercise better for the heart than\
 reaching down and lifting people up.\" by John Holmes teaches us to help one another.") // 1

console.log("\"Love is not patronizing and charity isn't about pity, it is about love. \n\
Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""); // 2

console.log(typeof(parseInt("10"))); // 3
console.log(typeof(10));

console.log(Math.ceil(parseFloat(9.8))); // 4

console.log(`${"python".includes("on") && "jargon".includes("on")}`); // 5

console.log("I hope this course is not full of jargon".includes("jargon")); // 6

let randomNum = Math.random();
let numberBetweenZeroAndOneHundred = Math.floor(randomNum * 101);
console.log(numberBetweenZeroAndOneHundred); // 7

randomNum = Math.random();
let numberBetweenFiftyAndOneHundred = Math.floor(50 + randomNum * 51);
console.log(numberBetweenFiftyAndOneHundred); // 8

randomNum = Math.random();
let numberBetweenZeroAndTwoHundredFiftyFive = Math.floor(randomNum * 256);
console.log(numberBetweenZeroAndTwoHundredFiftyFive); // 9

randomNum = Math.random();
let string = "JavaScript";
let numberBetweenStringLength = Math.floor(randomNum * string.length);
console.log(string.charAt(numberBetweenStringLength)); // 10

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"); // 11

let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.substr(sentence.indexOf("because", 1), ("because".length * 3) +2)); // 12 


