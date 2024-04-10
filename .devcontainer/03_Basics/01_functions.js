// function defination
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("L");
    console.log("P");
    console.log("Y");
}

// sayMyName()

// in function definations, number1, number2 are called paramters
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result;
    return number1 + number2
}

// when we call a function and 3,5 are called arguments
// passed to function
const result = addTwoNumbers(3, 5)

// console.log("Result: " + result);

// function loginUserMessage(username){
//     // if(username === undefined){
//     //     console.log("Please enter a username");
//     //     return
//     // }
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shilpy"));
// console.log(loginUserMessage(""));

// console.log(loginUserMessage()); // undefined just logged in

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(2))

// if we have multiple items and we dont know how many parameters we 
// need to paas to our function - we use rest operator
// dont need to take care of number of parameters to paas in our function - rest operator
// rest operator - bundles all the items in the array

function calculateCartPrice(val1, val2, ...num1){
    // val1 = 200, val2 = 400, ...num1 = 500, 2000
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Shilpy",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({
    username: "Sam",
    price: 399
});

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 500, 600, 1000]));




