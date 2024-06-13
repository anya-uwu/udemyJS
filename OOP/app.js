// function hex(r,g,b) {
//     return '#' + ((1<<24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r,g,b) {
//     return `rgb(${r}, ${b}, ${g})`
// }

// factory functions


// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${b}, ${g})`
//     };
//     color.hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }

//     return color;
// }

// const firstColor = makeColor(35, 12, 57);
// firstColor.hex()

// // contructor stuff

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${b}, ${g})`
// };

// const color1 = new Color(255, 4, 60);

// new class syntax