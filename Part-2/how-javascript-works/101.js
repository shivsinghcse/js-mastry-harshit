function myFunc() {
    let counter = 0;
    return function () {
        if (counter == 0) {
            console.log('Hi, you called me!!');
        } else {
            console.log("already called, don't call me again");
        }
        counter++;
    };
}

const ans = myFunc();
console.log(ans);
ans();
ans();

const ans2 = myFunc();
console.log(ans2);
ans2();
ans2();