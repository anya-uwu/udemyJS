const numberArray = [1, 2, 3, 4, 5, 6];

function print(element) {
    console.log(element)
}

// does something for each element in an array

numberArray.forEach(print)

numberArray.forEach(function (el) {
    console.log(el)
})

// not used that often anymore cause we have for of

// map

// does something to each element of array and generates new array
const doubles = numberArray.map(function (num) {
    return num * 2
})

// arrow functions (you suck and i hate you)
// used to create function expressions
const add = (x, y) => {
    return x+y;
}

// implicit return
// just returning one thing
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

// this also works for short things
const subtract = (a, b) => a - b
