// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "1321dfa"
tinderUser.name = "Samy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shilpy",
            lastname: "Sood"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 =  { obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)

// Object.assign(target, source) - target in which changes are going to be made
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "abs@gmail.com"
    },
    {
        id: 1,
        email: "abs@gmail.com"
    },
    {
        id: 1,
        email: "abs@gmail.com"
    },
    {
        id: 1,
        email: "abs@gmail.com"
    }
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)); // datatype is array
// console.log(Object.values(tinderUser));

// entries convert each key, value pair into different subarrays array contained by 1 parent array
// console.log(Object.entries(tinderUser)); // [ [ 'id', '1321dfa' ], [ 'name', 'Samy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Shilpy"
}

// course.courseInstructor

// OBject Destructuring
const {courseInstructor: instructor} = course
// console.log(courseInstructor);

console.log(instructor);


// JSON Object

// {
//     "name": "Shilpy",
//     "coursename": "js in hindi",
//     "price": "free"
// }


