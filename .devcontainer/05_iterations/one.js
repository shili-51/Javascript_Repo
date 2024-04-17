// break - breaks out of entire loop

// for(let i = 1; i <= 20; i++){
//     if(i == 5){
//         console.log("Detected 5")
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }



// continue - skips condition once
for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log("Detected 5")
        continue;
    }
    console.log(`Value of i is ${i}`);
}


// for of loop
const greetings = "Hello World!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}
