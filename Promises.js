// let date;
// const func = async (a, b) => {
//     setTimeout(() => {
//         console.log("Waited");
//     }, 1000);
//     return a + b;
// }

// const data = func(1, 2);
// // Initially it is undefined but after some time the undefined is replaced by the data returned by the function
// // { data: undefined }

// console.log(data);

// // Resolving the promise returned by the async function

// data.then((x) => {
//     console.log(x);
// }).catch((error) => {
//     console.log(error);
// });


// // Resolving the promise using await returned by the async function

// const func1 = async () => {
//     const data = await func(1, 2);
//     console.log(data);
// }

// // Callbacks

// const cart = ["Shoes", "Shirt", "Kurtas"];

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId);
// })

// // Here the problem is Inversion of Control

// const GITHUB = 'https://api.github.com/users/Vikram125609'
// const data = fetch(GITHUB);
// console.log(data);


// Promise Chaining 

// const func1 = async (a, b) => {
//     // setTimeout(() => {
//     //     console.log("First Timer");
//     // }, 5000);
//     // console.log(date.getTime())
//     for (let i = 0; i < 1000; i++) {
//         for (let j = 0; j < 10; j++) {
//             console.log("hi")
//         }
//     }
//     return a + b;
// }

// const func2 = async (a, b) => {
//     // setTimeout(() => {
//     //     console.log("Second Timer");
//     // }, 5000);
//     // console.log(date.getTime());
//     for (let i = 0; i < 1000; i++) {
//         for (let j = 0; j < 10; j++) {
//             console.log("hii")
//         }
//     }
//     return a + b;
// }

// const func3 = async (a, b) => {
//     // setTimeout(() => {
//     //     console.log("Third Timer");
//     // }, 5000);
//     // console.log(date.getTime());
//     for (let i = 0; i < 1000; i++) {
//         for (let j = 0; j < 10; j++) {
//             console.log("hiii")
//         }
//     }
//     return a + b;
// }

// const func4 = async (a, b) => {
//     // setTimeout(() => {
//     //     console.log("Fourth Timer");
//     // }, 5000);
//     // console.log(date.getTime());
//     for (let i = 0; i < 1000; i++) {
//         for (let j = 0; j < 10; j++) {
//             console.log("hiiii")
//         }
//     }
//     return a + b;
// }

// let usingAwait = async () => {
//     date = new Date();
//     console.log(date.getTime());
//     const data1 = await func1(1, 2);
//     date = new Date();
//     console.log(date.getTime());
//     const data2 = await func2(data1, 1);
//     date = new Date();
//     console.log(date.getTime());
//     const data3 = await func3(data2, 1);
//     date = new Date();
//     console.log(date.getTime());
//     const data4 = await func4(data3, 1);
//     date = new Date();
//     console.log(date.getTime());
//     console.log(data4);
//     return data4;
// }

// const data = usingAwait();

// console.log(data);

// // Initally it will looking something like this
// // { data : undefined }

// // Promise Chaining

// date = new Date();
// console.log(date.getTime());
// usingChain = func1(1, 2)
//     .then((data) => {
//         date = new Date();
//         console.log(date.getTime());
//         return func2(data, 1);
//     }).then((data) => {
//         date = new Date();
//         console.log(date.getTime());
//         return func3(data, 1);
//     }).then((data) => {
//         date = new Date();
//         console.log(date.getTime());
//         return func4(data, 1);
//     }).then((data) => {
//         date = new Date();
//         console.log(date.getTime());
//         return data;
//     }).catch((error) => {
//         console.log(error);
//     });

// console.log(usingChain);

// // Before Promises 
// // Promises are used to handel async operations in javascript

// const cart = ["Pants", "Shirt", "Kurta"]

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId);
//     // In this case we are passing our call back function to another function
// }); // will return an order id

// const promise = createOrder(cart);
// promise.then(function () {
//     // In this case we are attaching the callback function to the promise object
// })


// const GITHUB = "https://api.github.com/users/Vikram125609";
// const user = fetch(GITHUB);
// user.then((data) => {
//     console.log(data);
// }).catch((error) => {   
//     console.log(error);
// })
// console.log(user)


// Promise Object are Immutable we cannot change the data in the promise object 

// Interviews 
// What is Promise ?
// Promise is a object representing the eventual completion or failure of an asynchronus operation
