// Set timeout
// allows us to delay execution of a function
console.log("hello!!!")

setTimeout(() => {
    console.log("you still there?")
}, 3000)

console.log("goodbye")

// set interval
// repeat something at an interval

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

// call clear interval to stop it
// this isn't as common