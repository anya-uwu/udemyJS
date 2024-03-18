
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

// while loops

let count = 0;
while(count < 10) {
    count++;
    console.log(count)
}

// for of loops

const subreddits = ['cringe', 'books', 'anime', 'funny', 'pics']

for (sub of subreddits) {
    console.log(sub);
}

// can use this to very easily iterate through strings and arrays

// actual object literals can't be looped through witha for of loop
// use a for in loop to loop through object literals

