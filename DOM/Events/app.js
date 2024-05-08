// method 2
// selecting button
const btn = document.querySelector('#v2')

// executing function on click
btn.onclick = function () {
    console.log('YEAAAAAAAAAAh')
}

function inside() {
    console.log('you are inside me!')
}

function outside() {
    console.log('goodbye!')
}

btn.onmouseenter = inside;
btn.onmouseleave = outside;

// can be condensed into one line
document.querySelector('h1').onclick = () => {
    alert('hello h1!')
}

// method 3
// add event listening

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("I am the third!")
})