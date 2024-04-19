const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

const h2 = document.querySelector('h2')

h2.classList.add('purple')

h2.style.color = 'purple'

h2.append('hello!!!!!!!!!!!!!')

// creating new paragraph
const p = document.createElement('p')
// appending text 
p.append('this is a new paragraph!')
// inserting element
h2.insertAdjacentElement('afterend', p)
