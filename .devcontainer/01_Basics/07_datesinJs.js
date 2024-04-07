// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log("toDateString " + myDate.toDateString());
// console.log("toISOString " + myDate.toISOString());
// console.log("toJSON " + myDate.toJSON());
// console.log("toLocaleDateString " + myDate.toLocaleDateString());
// console.log("toLocaleString " + myDate.toLocaleString());

// console.log(typeof myDate); // Object



// to declare a specific type of date
// In javascript month start from 0

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2023-01-14") //YYYY-MM-DD (month start from 1)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023") //MM-DD-YYYY (month start from 1)
// console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    // by pressing Ctrl + spacebar we can view entire properties
    weekday: "long",

})


