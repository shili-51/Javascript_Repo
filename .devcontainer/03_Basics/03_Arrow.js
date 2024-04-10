// this keyword is used to refer current context

const user = {
    username: "Shilpy",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

console.log(this)

// function chai(){
//     let username = "Shilpy"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "Shilpy"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Shilpy"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit Return - we dont need to write return keyword
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

// Explicit Return - we need to write return keyword

// returning an object
const addTwo = (num1, num2) => ({username: "Shilpy"})


console.log(addTwo(3,4))
