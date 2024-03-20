const accountId = 1224456
let accountEmail = "shilpy@google.com"
var accountPassword = "12345"
accountCity = "Gurugram"
let accountState;

// accountId = 2; // not allowed
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "shilpy1@google.com"
accountPassword = "41352656"
accountCity = "Patiala"
console.table([accountState, accountId, accountEmail, accountPassword, accountCity]);