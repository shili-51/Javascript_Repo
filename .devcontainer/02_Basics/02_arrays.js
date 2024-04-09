const marvel_heros = ["thor", "Ironman", "spiderman"]

const dc_heros = ["superman", "hbdf", "frejfnk"]

// push function modifies in original array
// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'hbdf', 'frejfnk' ] ]

// concat results can only be seen in new array
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread operators
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// flat will take all subarrays elements into common array
// with Infinity parameter it will check automatically upto how much depth it need to split an array
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);
//   [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]


console.log(Array.isArray("Shilpy"));
console.log(Array.from("Shilpy"));  // converts into string

// Interesting as we need to specify what we need to convert into array key or value
console.log(Array.from({name: "Shilpy"})); 

let score1 = 100
let score2 = 200
let score3 = 300

// converting set of elements into array
console.log(Array.of(score1, score2, score3)); 




