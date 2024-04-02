// console.log(2 > 1);

// console.log("2" > 1);

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// equality check == and comparisons <, >, >=, <= work differently
// Comparisons convert null to a number, treating it as 0.
// That's why (0) null >= 0 is true and (1) null > 0 is false

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

