// const arr1 = [1, 2, 3, 4];

// for first iteration accumulator = initial Value = 0
// for subsequence iterations accumulator = accumulator + currentValue and doesnot care for initial value anymore

// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 
// initialValue
// );


const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)   // initialising value for accumulator

console.log(myTotal);