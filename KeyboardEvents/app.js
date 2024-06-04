document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

const input = document.querySelector('input');
// event when key pressed down

input.addEventListener('keydown', function (e) {
    console.log(e.key)
    // give us the keycode
    console.log(e.code)
})

// codes for keys stay the same regardless of language
