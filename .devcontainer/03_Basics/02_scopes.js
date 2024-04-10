// var c = 300
let a = 300

if(true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);
}

// console.log(a); //error as let is block scoped
// console.log(b); //error as const is block scoped
// console.log(c);
// console.log(a);


function one(){
    const username = "Shilpy"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)

    // two()

}

// one()

console.log(addone(5))

function addone(num){
    return num + 1
}


// In below case we cannot call function before its declaration
console.log(addTwo(5))

const addTwo = function(num){
    return num + 2;
}

