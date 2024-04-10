// Immediately Invoked Function Expressions (IIFE)
// If on running a file, we need Database connection to be established immediately
// If we dont want any global scope value impact our local function we use IIFE

// Global scope ke pollution se kai bar hoti hai problem, to global scope
// ke jo bhi variables ya jo bhi vaha declarations hain, uske pollution ko hatane ke liye aapne IIFE ka use kiya hai

// (Function defination)(execution call)


// use case - how to write 2 IIFEs in single file - after first IIFE semicolon should be used.

(function chai(){
    // Named IIFE
    console.log(`DB Connected`);

})();

// Unnamed IIFE

( (name) => {
    console.log(`DB connected TWO ${name}`)
})('Shilpy')

