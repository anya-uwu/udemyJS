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



