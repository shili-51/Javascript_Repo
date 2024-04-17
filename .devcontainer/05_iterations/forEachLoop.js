// Use Case - 
// for accessing array containing different objects we can use 
// for Each Loop

const coding = ["cpp", "javascript", "java", "python"]


// coding.forEach(function (language) {
//     console.log(language);

// })

// coding.forEach((language) => {
//     console.log(language);

// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})



