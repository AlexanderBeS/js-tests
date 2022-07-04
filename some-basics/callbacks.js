// The callback function for function
// is executed after two seconds with
// the result of addition
const add = function (a, b, callback) {
    console.log('add arguments a,b', a, b);
    setTimeout(() => {
        callback(a + b); //почему это число попадает в sum1, sum2???
    }, 2000);
};

// Using nested callbacks to calculate
// the sum of first four natural numbers.
add(1, 2, (sum1) => {
    add(4, sum1, (sum2) => {
        add(5, sum2, (sum3) => {
            console.log(`Using callback result is ${sum3}`);
        });
    });
});





// This function returns a promise
// that will later be consumed to get
// the result of addition
const addPromise = function (a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
};

// Consuming promises with the chaining of then()
// method and calculating the result
addPromise(1, 2)
    .then((sum1) => {
        return addPromise(3, sum1);
    })
    .then((sum2) => {
        return addPromise(4, sum2);
    })
    .then((sum3) => {
        console.log(
            `Sum of first 4 natural numbers using
       promise and then() is ${sum3}`
        );
    });

// Calculation the result of addition by
// consuming the promise using async/await
(async () => {
    const sum1 = await addPromise(1, 2);
    const sum2 = await addPromise(3, sum1);
    const sum3 = await addPromise(4, sum2);

    console.log(
        `Sum of first 4 natural numbers using
     promise and async/await is ${sum3}`
    );
})();
