function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){

    // this.username in function SetUsername gets erased once function's execution Context get out of function call Stack
    // so to reference the username property of already executed function - we use call keyword
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
