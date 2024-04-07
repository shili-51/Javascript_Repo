// Primitive (call by value) (reference of copies is allocated)

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt



const Id = Symbol('123')
const anotherId = Symbol('123')
// console.log(Id);
// console.log(anotherId);
// console.log(Id === anotherId);

const bigNumber = 123456789123456789n
console.log(bigNumber);



// Reference (Non primitive) (reference of exact location is allocated)

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Shilpy",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof null) //Object

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "Shilpy"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "shilpy@google.com"

console.log(userOne.email);
console.log(userTwo.email);






