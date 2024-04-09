// singleton - (if we make an object using constructor then singleton object is created)
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shilpy",
    "full name": "Shilpy Sood",
    [mySym]: "myKey1",  // using declared Symbol in our object
    age: 18,
    location: "Patiala",
    email: "Shilpy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// To access Already declared Symbol outside object and modified inside our declared object
// console.log(JsUser[mySym]);

JsUser["email"] = "shilpy@gmail.com"
console.log(JsUser["email"]);

// if we dont want anybody to make changes to our object
// Object.freeze(JsUser)
JsUser["email"] = "shilpy@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);



