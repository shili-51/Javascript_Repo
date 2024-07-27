// setInterval executes a function repeatedly with a fixed interval between each execution.
// Use setInterval when you need to execute a function repeatedly at regular intervals.

setInterval(() => {
  console.log('This message is displayed every 2 seconds');
}, 2000);


function greet(name) {
  console.log('Hello, ' + name);
}

setInterval(greet, 3000, 'Alice');


##############################################################################################################################################



// setTimeout executes a function "once" after a specified delay.
// Use setTimeout when you need to execute a function once after a delay.

setTimeout(() => {
  console.log('This message is displayed after 2 seconds');
}, 2000);

function greet(name) {
  console.log('Hello, ' + name);
}

setTimeout(greet, 3000, 'Alice');

