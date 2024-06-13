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

class Color {
    // executes when new color is created
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `rgb(${r}, ${b}, ${g})`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    rgba() {
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

}

const c1 = new Color(230, 108, 3, 'tangerine');

// Extends and Super Keywords

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }

}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        // super lets us reuse the constructor to add unique elements to this child
        // super reference to super class
        super(name, age);
        this.livesLeft = livesLeft

    }
    meow() {
        return 'meow';
    }
}

class Dog extends Pet {
    woof() {
        return 'woof';
    }
}

const jambo = new Cat('Jambo', 3);
console.log(jambo);
console.log(jambo.name);
console.log(jambo.meow());