// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


// const container = document.querySelector('#container')
// const newImg = document.createElement('img')
// newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
// container.appendChild(newImg)

const container = document.querySelector('#container');

for (let i = 494; i < 650; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('p');
    label.innerText = i;
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)
}