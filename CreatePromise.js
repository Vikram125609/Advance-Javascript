// Creation of Promise

const cart = ["Shoes", "Pants", "Kurtas"];

const validateCart = () => {
    return true;
}

// Producer part of the the promise 

const createOrder = (cart) => {
    return new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            const error = new Error("Cart is not valid");
            reject(error);
        }
        const orderId = 1;
        setTimeout(() => {
            resolve(orderId);
        }, 1000);
    });
}

const proceedToPayment = (orderId) => {
    return new Promise((resolve, reject) => {
        if (!orderId) {
            const error = new Error("There is no such orderId Exist in our Database");
            reject(error);
        }
        const amount = 10000;
        setTimeout(() => {
            resolve(amount);
        }, 1000);
    })
}


// We can use this and there is one other way as well we are returning 
// createOrder(cart)
//     .then(orderId => proceedToPayment(orderId))
//     .then(amount => console.log(amount))
//     .catch(error => console.log(error));


createOrder(cart).then((orderId) => {
    return proceedToPayment(orderId);
}).then((amount) => {
    console.log(amount);
}).catch((error) => {
    console.log(error.message)
}).then(() => {
    console.log("No matter what happend i will be definately be called")
})