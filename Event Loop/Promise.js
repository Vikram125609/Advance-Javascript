setTimeout(function cbTimeout() {
    console.log('Timeout Callback');
}, 1);
fetch('https://api.github.com/users/Vikram125609').then(function cbFetch(data) {
    console.log(data);
});
let count = 0;
const time1 = new Date();
for (let i = 0; i < 100000; i++) {
    for (let j = 0; j < 50000; j++) {
        count += 1;
    }
}
const time2 = new Date();
console.log(time2 - time1);