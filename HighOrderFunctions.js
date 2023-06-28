// A function take another function as an argument or return a function from it is called as higher order function 
const radius = [1, 2, 4, 8];
const area = (radius) => {
    return Math.PI * radius * radius;
}
const circumference = (radius) => {
    return 2 * Math.PI * radius
}
const diameter = (radius) => {
    return 2 * radius;
}
// By Using User Defined Function
const calculate = (radiu, logic) => {
    return radiu.map((radius) => {
        return logic(radius);
    })
}
// Using User Defined Function
console.log('Using User Defined Function');
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// Creating the user defined function similar to the working of map
Array.prototype.cal = function (logic) {
    // here the this keyword is pointing to the array
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

// Using Calculate
console.log('Using Array.Prototype');
console.log(radius.cal(area));

// Using Map
console.log('Using Map');
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));