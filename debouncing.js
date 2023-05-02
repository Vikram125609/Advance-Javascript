const input = document.getElementById('text');

let counter = 0;
const getData = () => {
    console.log('Fetching Data', counter);
    counter++;
}

// Have some function which will get the data for you if the time difference between two key presses is greater than 300ms

const doSomeMagic = (getData, delay) => {
    return () => {
        setTimeout(() => {
            getData();
        }, delay);
    }
}

const betterFucntion = doSomeMagic(getData, 1000);