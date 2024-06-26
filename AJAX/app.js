// // clunky old way to send requests

// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("It loaded!");
//     const data = JSON.parse(this.responseText);
//     console.log(data.name)
// };

// req.onerror = function () {
//     console.log("Error!");
//     console.log(this);
// }

// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

// Fetch Requests
// no annoying nesting cause we can use .then

// fetch("https://swapi.dev/api/people/1/")
// .then((res) => {
//     console.log("resolved", res);
//     return res.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((e) => {
//     console.log('error', e);
// })


// // Async fetch request
// const loadData = async () => {
//     try {
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json();
//     console.log(data);
//     } catch (e) {
//         console.log("error", e);
//     }
// }

// loadData();

// Axios
// already parses data for you yippee!!

// axios.get("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("Response:", res);
// })

// async axios

// const getPerson = async () => {
//     try {
//     const res = await axios.get("https://swapi.dev/api/people/1/");
//     console.log(res.data)
//     } catch(e) {
//         console.log("error", e);
//     }
// };

// getPerson();

// Headers with Axios

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch (e) {
        return "no jokes available sorry"
    }   
}

button.addEventListener('click', addNewJoke);