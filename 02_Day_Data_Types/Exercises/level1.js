let challenge = "30 Days of JavaScript"; // 1
console.log(challenge); // 2 
console.log(challenge.length); // 3
console.log(challenge.toUpperCase()); // 4
console.log(challenge.toLowerCase()); // 5
console.log(challenge.substring(8)); // 6
console.log(challenge.substring(0, 3)); // 7
console.log(`challenge contains Script: ${challenge.includes("Script")}`); // 8
console.log(challenge.split("")); // 9
console.log(challenge.split(" ")); // 10
console.log(challenge.replace("JavaScript", "Python")); // 12
console.log(challenge.charAt(15)); // 13
console.log(challenge.charCodeAt(challenge.indexOf("J"))); // 14
console.log(challenge.indexOf("a")); // 15
console.log(challenge.lastIndexOf("a")); // 16
console.log(challenge.startsWith("3")); // 21
console.log(challenge.endsWith("t")); // 22
console.log(challenge.match(/a/g)); // 23 
console.log("".concat("30 Days Of", " JavaScript")) // 24
console.log(challenge.repeat(2)); // 25

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(",")); // 11

let becauseString = "You cannot end a sentence with because because because is a conjunction";
console.log(becauseString.indexOf("because")); // 17
console.log(becauseString.lastIndexOf("because")); // 18
console.log(becauseString.search("because")); // 19

let nonTrimmedString = " 30 Days Of JavaScript ";
console.log(nonTrimmedString.trim()); // 20


