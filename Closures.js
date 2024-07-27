// Closure - 
Use Cases -
1) Creating Private Variables.
2) Maintaing state in private variables.



// initCounter defines a variable count and a function increment that uses count Variable.
// increment Function is returned by initCounter Function, and assigned to Closure function - next.
// Even though initCounter has finished executing, next (which is increment Function) still has access to count variable due to the closure.



function initCounter(){
    let count = 0;
    return function increment(){
        count++;
        return count;
    };
}


var next = initCounter();
console.log(next());
console.log(next());



Scope Chain: Closures have access to variables in their own scope, the outer function’s scope(initCounter function), and the global scope.
Persistent State: Variables defined in the outer function’s(initCounter) scope persist in memory as long as the inner function (increment) that references them is accessible.
Memory Management: Be cautious of excessive use of closures as they can lead to increased memory usage due to the persistent state.

  
