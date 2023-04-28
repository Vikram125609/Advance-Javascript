// polyfill is a kind of Browser fallback
// what if the browser does not support bind function ? and we have to write our own bind function

const name0 = {
    first_name: 'Vikram',
    last_name: 'Singh'
}

const print_name = function () {
    console.log(this.first_name + " " + this.last_name);
}

const print_name_bind0 = print_name.bind(name0);
print_name_bind0()

// Now what we want ? Let's clearify the things
// we want the bind function should be define by ourself

// function my_bind() {

// }

// const print_name_bind1 = print_name.my_bind(name0);


// if we keep any methond in Function.prototype then each and every method what we write has access to those methods

Function.prototype.my_bind = function (...args) {
    let func = this;
    return function () {
        func.call(args[0]);
    }
}

const print_name_my_bind = print_name.my_bind(name0);
print_name_my_bind();