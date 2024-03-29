function singSong() {
    console.log('lalalalalala')
}

singSong();

function greet(person, age) {
    console.log(`Hi ${person}! You are ${age} years old`)
}

greet('Shelby', '18');

function repeat(str, numTimes) {
    let result = '';
    for(let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result)
}

repeat('hi', 2)