console.log(this);
console.log(window);

console.log(myFunction); // undefined
// myFunction(); // TypeError: myFunction is not a function

// function expression
var myFunction = function () {
    console.log('this is my function');
};

console.log(myFunction);
