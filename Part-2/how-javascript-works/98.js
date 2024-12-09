// clousres
// closure : 30-40%
// analyse : 70-80%
// real example : 100%

// ---------------------------------

// function myFunc(){
//     return 1;
// }

// const ans = myFunc()
// console.log(ans);

// function myFunc(){
//     return "one";
// }

// const ans = myFunc()
// console.log(ans);

// function myFunc(){
//     return [1, 2, 3];
// }

// const ans = myFunc()
// console.log(ans);

// function myFunc(){
//     return {name: "shiv"};
// }

// const ans = myFunc()
// console.log(ans);

// -------------------------

// ****** function can return function

// function outerFunction() {
//     function innerFunction() {
//         console.log('hello world');
//     }
//     return innerFunction;
// }

// const ans = outerFunction()
// console.log(ans);
// ans()

// **** clousres
// const greet = 'hi'
function printFullName(firstName, lastName) {
    let a = 10;
    function printName() {
        // console.log(arguments);
        // console.log(greet, firstName, lastName);
        console.log(a, firstName, lastName);
    }
    return printName;
}

const ans = printFullName('Ashutosh', 'Singh');
console.log(ans);
ans();
