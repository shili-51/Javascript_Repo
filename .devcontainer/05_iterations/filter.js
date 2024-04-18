// const coding = ["cpp", "javascript", "java", "python"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values) --- undefined
// forEach loop does not return anything




const myNums = [1,2,3,4,5,6,7,8,9,10]


// let newNums = myNums.filter( (num) => num > 4)

const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num);
    }

})

console.log(newNums);

