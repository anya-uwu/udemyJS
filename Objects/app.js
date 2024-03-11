const person = {
    firstName: 'Lucy',
    lastName: 'Steel',
    age: 14,
    stand: 'Ticket to Ride',
    isAlive: true,
    allies: ['Johnny Joestar', 'Gyro Zeppeli', 'Hot Pants', 'Steven Steel'],
    enemies: ['Funny Valentine', 'Scarlet Valentine']
}

// quote notation
console.log(person['firstName'])

// dot notation
console.log(person.age);

// Arrays of objects???

const characters = [
    {name: 'Jolyne', age: 19, stand: 'Stone Free'},
    {name: 'Jotaro', age: 17, stand: 'Star Platinum'},
    {name: 'Josuke', age: 16, stand: 'Crazy Diamond'}
];

console.log(characters[0].name);