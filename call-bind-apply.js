const name0 = {
    first_name: 'Vikram Singh',
    last_name: 'Dewda',
    print_full_name: function () {
        console.log(this.first_name + " " + this.last_name);
    }
    // print_full_name is a method 
    // Each and every function in javascript has an access to this keyword 
    // here the this keyword points to the name object 
    // here while defining the method you cannot use the arrow function you should use the this -> function () {}

}

// method invocation
name0.print_full_name();

const name1 = {
    first_name: 'Govind',
    last_name: 'Radhey',
    // since print_full_name method is as same as the the method in name0 so why to define it again
    // print_full_name: function () {
    //     console.log(this.first_name + " " + this.last_name);
    // }
}

// function burrowing
name0.print_full_name.call(name1);
// each and every method in javascript has an access to the special function call
// the first argument has an reference or what we want the "this" to be pointing to 
// since we want the this of name0 to be pointing to name1 we pass in the call function

// since we want to reuse the method we should not declare it inside the object declare it globally
const print_full_name = function (hometown, state) {
    console.log(this.first_name + " " + this.last_name + " from " + hometown + " to " + state);
};

print_full_name.call(name0);
print_full_name.call(name1);

// passing the different parameter in the call function the more argument we want we can pass seperated by comma
print_full_name.call(name0, 'Delhi', 'India');
print_full_name.call(name1, 'Vrindavan', 'Uttrakhand');

// here the only difference is that it take the second argument as array of list
print_full_name.apply(name0, ['Array1', 'List1']);
print_full_name.apply(name1, ['Array2', 'List2']);


// bind method
// the bind method looks exactly the same as call method
// the bind method bind the method with the object and returns the copy of the method

// this is used to just bind and keep the copy of the method and use it later
let bind_print_full_name = print_full_name.bind(name0, 'Delhi', 'India');
console.log(bind_print_full_name)
// function invocation
bind_print_full_name()
