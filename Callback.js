A callback is a function passed into another function as an argument to be executed later. 
This is often used for operations that take time, such as reading files or making network requests.


function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched!";
        callback(data);  // Call the callback function with the data
    }, 1000);  // Simulate a delay
}

function handleData(data) {
    console.log(data);  // Process the data
}

// Call fetchData and pass handleData as the callback
fetchData(handleData);




Common Use Cases:
Event Handlers: Functions like click handlers in the DOM.
API Requests: Handling responses from network requests.
File Operations: Reading or writing files in Node.js.




Callback Hell: When you have multiple nested callbacks, the code can become difficult to read and maintain. This is sometimes referred to as "callback hell."

asyncOperation1((result1) => {
    asyncOperation2(result1, (result2) => {
        asyncOperation3(result2, (result3) => {
            // Handle final result
        });
    });
});
