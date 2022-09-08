function add(xPromise, yPromise) {
    // `Promise.all([ .. ])` takes an array of promises,
    // and returns a new promise that waits on them
    // all to finish
    return Promise.all([xPromise, yPromise])

        // when that promise is resolved, let's take the
        // received `X` and `Y` values and add them together.
        .then(function(values) {
            // `values` is an array of the messages from the
            // previously resolved promises
            return values[0] + values[1];
        });
}

// `fetchX()` and `fetchY()` return promises for
// their respective values, which may be ready
// *now* or *later*.
add(fetchX(), fetchY())

    // we get a promise back for the sum of those
    // two numbers.
    // now we chain-call `then(..)` to wait for the
    // resolution of that returned promise.
    .then(function(sum) {
        console.log(sum); // that was easier!
    });


function fetchX() {
    return new Promise((resolve, reject) => resolve(22));
}

function fetchY() {
    return new Promise((resolve, reject) => resolve(10));
}


//-----------------------
let p3 = new Promise(function(resolve, reject) {
    resolve('B');
});

let p1 = new Promise(function(resolve, reject) {
    resolve(p3);
});

let p2 = new Promise(function(resolve, reject) {
    resolve('A');
});

p1.then(function(v) {
    console.log(v);
});

p2.then(function(v) {
    console.log(v);
});

// A B  <-- not  B A  as you might expect
//Щоб уникнути таких тонких кошмарів, ви ніколи не повинні покладатися ні на що щодо впорядкування/планування зворотних викликів у Promises.

//----------------
let p = new Promise(function(resolve, reject) {
    foo.bar();	// `foo` is not defined, so error!
    resolve(42);	// never gets here :(
});

p.then(
    function fulfilled() {
        // never gets here :(
    },
    function rejected(err) {
        console.log('ERROR, rejected')
        // `err` will be a `TypeError` exception object
        // from the `foo.bar()` line.
    }
);

//---------------------------
let p4 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p5 = Promise.resolve(42);

//----------------------
//Terminology: Resolve, Fulfill, and Reject
let prom1 = new Promise(function(X, Y) {
    // X() for fulfillment
    // Y() for rejection
});


//--------------
let rejectedPr = new Promise( function(resolve,reject){
    // resolve this promise with a rejected promise
    resolve( Promise.reject( "Oops" ) );
} );

rejectedPr.then(
    function fulfilled(){
        // never gets here
    },
    function rejected(err){
        console.log( err );	// "Oops"
    }
);


//--------------
//Promise.all() - чекає завершення усіх промісів
//Promise.race() - чекає тільки перший проміс


let p11 = new Promise( function(resolve,reject){
    reject( "Oops" );
} );

let p22 = Promise.reject( "Oops" );


