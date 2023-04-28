// polyfill is a kind of Browser fallback
// what if the browser does not support bind function ? and we have to write our own bind function

const name0 = {
    first_name: 'Vikram',
    last_name: 'Singh'
}

const print_name = function (hometown, capitaltown, gaontown) {
    console.log(this.first_name + " " + this.last_name + " from " + hometown + " to " + capitaltown + " go " + gaontown);
}

const print_name_bind0 = print_name.bind(name0, "Delhi", "Ayodhya");
print_name_bind0("Mumbai")

// Now what we want ? Let's clearify the things
// we want the bind function should be define by ourself

// function my_bind() {

// }

// const print_name_bind1 = print_name.my_bind(name0);


// if we keep any methond in Function.prototype then each and every method what we write has access to those methods

Function.prototype.my_bind = function (...args0) {
    let func = this;
    const params = args0.slice(1);
    return function (...args1) {
        func.apply(args0[0], [...params,...args1]);
    }
}

const print_name_my_bind = print_name.my_bind(name0, "Delhi", "Mumbai");
print_name_my_bind("Ayodhya");