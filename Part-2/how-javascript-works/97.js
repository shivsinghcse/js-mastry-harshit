// lexical environment, scope chain

const lastname = 'Singh';

const printName = function () {
    const firstname = 'Ashutosh';
    function myFunction() {
        console.log(firstname);
        console.log(lastname);
    }
    myFunction();
};

printName();
