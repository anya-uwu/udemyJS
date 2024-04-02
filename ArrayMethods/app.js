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

// filter
// filters and returns new array based on condition

// this function filters all numbers that aren't 4
numberArray.filter(n => {
    return n === 4
})

// every and some

numberArray.every(number => number > 0)
// return true
// as soon as one returns false the whole statement is some

numberArray.some(number => number > 5)
// returns true as long as one thing follows the rule

// reduce