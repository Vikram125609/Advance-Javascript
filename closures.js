// What are closures in javascript
// const outer = () => {
//     const a = 7;
//     return () => {
//         console.log(a);
//     }
// }
// const inner = outer();
// inner();

// On calling the Outer function returns the inner function and on calling the inner function we get 7
// Output is 7


// Still it is forming a closure
// const outer = () => {
//     const inner = () => {
//         console.log(a);
//     }
//     var a = 7;
//     return inner;
// }
// const innerFunction = outer();
// innerFunction();

// If we make the var to let still it form a closure
// const outer = () => {
//     const inner = () => {
//         console.log(a);
//     }
//     let a = 7;
//     return inner;
// }
// const innerFunction = outer();
// innerFunction();


// On passing some parameters still it is forming a closure
// const outer = (param) => {
//     const inner = () => {
//         console.log(a, param);
//     }
//     let a = 7;
//     return inner;
// }
// const innerFunction = outer('hello');
// innerFunction();

// Still it is forming a closures
// function outest() {
//     let c = 20;
//     function outer(b) {
//         function inner() {
//             console.log(a, b, c);
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer;
// }
// outest()('Hello World')()

// Output 10 , Hello World , 20


// Conflicting name global variables
// function outest() {
//     let c = 20;
//     function outer(b) {
//         function inner() {
//             console.log( a, b, c);
//         }
//         return inner;
//     }
//     let a = 10;
//     return outer;
// }
// let a = 100;
// outest()('Hello World')()

// Output 10 Hello World 20

// But if we don't have the statement let a = 100 on line number 78
// function outest() {
//     let c = 20;
//     function outer(b) {
//         function inner() {
//             console.log( a, b, c);
//         }
//         return inner;
//     }
//     return outer;
// }
// let a = 100;
// outest()('Hello World')()

// Output 100 Hello World 20


// But when we don't have any kind of that variable initialized it will give us a reference error 


// Advantages of closures
// Used in module patterns
// Function Currying 
// Closure helps in data hiding and encapsulation 


// Data hiding : Suppose if we have a variable and we want some data privacy so other function of code cannot have access to those variables 
// We want the value of counter function should be incrmented by the increment function only
// function counter() {
//     let count = 0;
//     return function increment() {
//         count = count + 1;
//         console.log(count)
//     }
// }

// const counter1 = counter();
// counter1(); // count = 1
// counter1(); // count = 2
// counter1(); // count = 3
// const counter2 = counter();
// counter2(); // count = 1
// counter2(); // count = 2
// counter2(); // count = 3
// Here the count is a kind of private variable 

// Function Constructor In Javascript 
// function Counter() {
//     let count = 0;
//     this.incrementCounter = function () {
//         count = count + 1;
//         console.log(count);
//     }
//     this.decrementCounter = function () {
//         count = count - 1;
//         console.log(count);
//     }
// }

// const counter1 = new Counter();
// counter1.incrementCounter()
// counter1.incrementCounter()
// counter1.incrementCounter()
// counter1.decrementCounter()



// Disadvantages 
// Over consumption of memory
// Some time those close over variable are not garbage collected 
// if not handled properly it may lead to memory leak and sometiem may freez the browser



// Garbage Collector 
// Relation between garbage collector & memory leak