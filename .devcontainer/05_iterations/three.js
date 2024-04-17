const myObject = {
    js: 'javascript',
    cpp : 'C++',
    rb : "ruby"
}

for (const key in myObject) {
    // console.log(key)
    // console.log(myObject[key])
    console.log(`${key} shortcut is for ${myObject[key]}`)
    
}

// (for in) loop does not print direct values of array


