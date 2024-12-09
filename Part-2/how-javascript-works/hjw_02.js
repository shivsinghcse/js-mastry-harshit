// hoisting
console.log(this);
console.log(window);
console.log(myFunction);
myFunction();
console.log(fullName);

function myFunction() {
    console.log('this is my function');
}

var firstname = 'Ashutosh'; // global scope
var lastname = 'Singh';
var fullName = firstname + ' ' + lastname;
console.log(fullName);
