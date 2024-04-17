const userEmail = "s@Shilpy.ai"

// if(userEmail){
//     console.log("Got user email")
// }else {
//     console.log("Dont have user Email")
// }


// falsy values 
// false, 0, -0, BigInt (0n), "", null, undefined, Nan

// rest all are truthy values
// "0", 'false', " ", [], {}, function(){}


// false == 0 ----- true
// false == '' ---- true
// 0 == '' ---- true




// Nullish Coalescing Operator (??) : null undefined

let val1;

// val1 = null ?? 10 === 10
// val1 = undefined ?? 15

// val1 = null ?? 10 ?? 15 ------> 10

// console.log(val1);



// Ternary Operator

// condition ? true : false

const price = 100
price >= 80 ? console.log("more than 80") : console.log("less than 80")