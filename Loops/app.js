
// make sure updating happens after the conditional or you will get an endless loop
for (let i=1;  i<=10; i++) {
    console.log(i);
}

for (let i=1; i<=20; i+=2) {
    console.log(i)
}

for (let i= 100; i>=0; i-=10) {
    console.log(i)
}

// looping over arrays

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// iterating over an array
for (let i = 0; i < days.length; i++) {
    console.log(days[i])
}

// iterating backwards
for (let i = days.length-1; i >=0; i--) {
    console.log(days[i])
}