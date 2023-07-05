let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."

console.log(sentence.match(/love/gi).length); // 1

let sentence2 = "You cannot end a sentence with because because because is a conjunction"

console.log(sentence2.match(/because/gi).length); // 2

const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let cleanSentence = sentence3.replace(/%/g, "").replace(/@/g, "").replace(/&/g, "").replace(/#/g, "").replace(/\$/g, "").replace(/;/g, "");
console.log(cleanSentence); // 3
// I wasn't able to count the amount of words with the knowledge of javascript I have so far


const sentence4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let digitWords = sentence4.match(/\d+/g); // only digits allowed

let income1 = parseInt(digitWords[0])  * 12;
let income2 = parseInt(digitWords[1]);
let income3 = parseInt(digitWords[2]) * 12;

console.log(`Total Income: ${income1 + income2 + income3}`);

