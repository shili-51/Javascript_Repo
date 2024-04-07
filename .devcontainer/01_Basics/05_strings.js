const name = "Shilpy"
const repocount = 50

// console.log("Hello my name is" + name + " and my repo Count is " + repocount);

// new method
// console.log(`Hello my name is ${name} and my repo Count is ${repocount}`);

const gameName = new String('Shilpy-ss')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "       Shilpy     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shilpy.com/shilpy%20sood"
console.log(url.replace('%20','-'))

console.log(url.includes('shilpy'))

console.log(gameName.split(''));
