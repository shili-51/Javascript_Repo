Promises
Promises represent a value that may not be available yet but will be resolved in the future. 
They provide a way to handle asynchronous operations more elegantly than callbacks.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched!";
            resolve(data);  // Fulfill the promise with the data
        }, 1000);  // Simulate a delay
    });
}

fetchData()
    .then(data => console.log(data))  // Handle the resolved value
    .catch(error => console.error(error));  // Handle any errors



#############################################################################################################################################

Async/Await
async/await is a syntax that makes working with Promises easier by allowing you to write asynchronous code in a more synchronous style.

Basic Usage:
async: Marks a function as asynchronous and ensures it returns a Promise.
await: Pauses the execution of the async function until the Promise is resolved.


async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Data fetched!";
            resolve(data);  // Fulfill the promise with the data
        }, 1000);  // Simulate a delay
    });
}

async function processData() {
    try {
        const data = await fetchData();  // Wait for the Promise to resolve
        console.log(data);  // Handle the resolved value
    } catch (error) {
        console.error(error);  // Handle any errors
    }
}

processData();


######################################################################################################################

Resolving Callback Hell with Promises and Async/Await


Promises:

Promises allow chaining with .then() and .catch(), which helps avoid deeply nested callbacks. For example:

asyncOperation1()
    .then(result1 => asyncOperation2(result1))
    .then(result2 => asyncOperation3(result2))
    .then(result3 => console.log(result3))
    .catch(error => console.error(error));




Async/Await:

async/await syntax provides a more synchronous style of coding, which can be easier to read and maintain. 
Nested callbacks are replaced by straightforward await expressions, and error handling is simplified using try/catch.




async function processAsyncOperations() {
    try {
        const result1 = await asyncOperation1();
        const result2 = await asyncOperation2(result1);
        const result3 = await asyncOperation3(result2);
        console.log(result3);
    } catch (error) {
        console.error(error);
    }
}

processAsyncOperations();
