function sleep(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, millis);
    });
}
function awake(millis) {
    return 'awake ' + millis;
}
const result1 = sleep(100);
const result2 = awake(100);
console.log(result1);
console.log(result2);
console.log('Hiiii');