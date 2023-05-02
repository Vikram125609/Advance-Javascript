// Functioin Currying Using Bind Method

// const multiply = (a, b) => {
//     return a * b;
// };

// const multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(9));

// const multiplyByThree = multiply.bind(this, 2, 5);
// console.log(multiplyByThree(4)); // here 4 will not make any change in the result

// const multiplyByFour = multiply.bind(this);
// console.log(multiplyByFour(4, 5))


// Function Currying Using Closures
const mulitply = (x) => {
    return (y) => {
        console.log(x * y);
    }
}

const multiplyByTwo = mulitply(2);
multiplyByTwo(3);

const multiplyByThree = mulitply(3);
multiplyByThree(3);

const multiplyByFour = mulitply(4);
multiplyByFour(3);