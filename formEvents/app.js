const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName')
const list = document.querySelector("#cat");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submitted!!')
    console.log(input.value)
    const catName = input.value;
    const newLi = document.createElement("li");
    newLi.innerText = catName;
    cats.append(newLi)
    input.value = '';
});

const h1 = document.querySelector('h1');

// change event
// when the user leaves the text box and clicks elsewhere on the page the event happens
input.addEventListener('change', function (e) {
    console.log("hjfwehfb")
});

// input event
// when the input changes
input.addEventListener('input', function (e) {
    console.log("dfgsdg")
    // updating h1 to be what someone is typing in the input
    h1.innerText = input.value
});
