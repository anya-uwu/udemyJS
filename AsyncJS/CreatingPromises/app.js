// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if(rand < 0.7) {
//                 resolve('your data here');
//             }
//             reject('request error!');
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("done with request!")
//         console.log('data is:', data)
//     })
//     .catch((err) => {
//         console.log("oh no", err)
//     })


// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve('YOUR FAKE DATA HERE');
//             }
//             reject('Request Error!');
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("DONE WITH REQUEST!")
//         console.log('data is:', data)
//     })
//     .catch((err) => {
//         console.log("OH NO!", err)
//     })


// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
    // wait for promise to be resolved
    await delayedColorChange('lightpink', 1000)
    // orange color changes after red promise resolved
    await delayedColorChange('lightyellow', 1000)
    await delayedColorChange('lightgreen', 1000)
    await delayedColorChange('lightblue', 1000)
    await delayedColorChange('lavender', 1000)
    return "all done!"
}

rainbow().then(() => console.log("ITS SO OVER"))