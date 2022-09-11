let x = 1;

function* foo() {
    x++;
    yield; // pause!
    console.log("x:", x);
}

function bar() {
    x++;
}

// construct an iterator `it` to control the generator
let it = foo(); //створює ітератор
// start `foo()` here!
it.next(); //зупиняється на yield, але працює і активен
console.log(x);						// 2
bar();
console.log(x);						// 3
it.next();				// x: 3


//-----------------------------
function* foo1(x, y) {
    return x * y;
}

let it1 = foo1(6, 7);
let res = it1.next();
console.log(res.value);		// 42
//------------------------------
//Producers and Iterators
let gimmeSomething = (function () {
    let nextVal;

    return function () {
        if (nextVal === undefined) {
            nextVal = 1;
        } else {
            nextVal = (3 * nextVal) + 6;
        }

        console.log('nextVal - ', nextVal)
        return nextVal;
    };
})();

gimmeSomething();		// 1
gimmeSomething();		// 9
gimmeSomething();		// 33
gimmeSomething();		// 105

//iterator
let something = (function () {
    let nextVal;

    return {
        // needed for `for..of` loops
        [Symbol.iterator]: function () { //саме цей метод вказує, що returned obj is ІТЕРАТОР
            return this;
        },

        // standard iterator interface method
        next: function () {
            if (nextVal === undefined) {
                nextVal = 1;
            } else {
                nextVal = (3 * nextVal) + 6;
            }

            console.log('something.next().value - ', nextVal);
            return {done: false, value: nextVal};
        }
    };
})();

// something.next().value;		// 1
// something.next().value;		// 9
// something.next().value;		// 33
// something.next().value;		// 105


for (let v of something) {
    // don't let the loop run forever!
    if (v > 500) {
        break;
    }
}

//------------------
let a = [1, 3, 5, 7, 9];
let it2 = a[Symbol.iterator]();

console.log('it2 - ', it2.next().value); // 1
console.log('it2 - ', it2.next().value);	// 3
console.log('it2 - ', it2.next().value);	// 5

//---------------------
//виклик генератора
function* something1() {
    let nextVal;

    try {
        while (true) {
            if (nextVal === undefined) {
                nextVal = 1;
            } else {
                nextVal = (3 * nextVal) + 6;
            }

            yield nextVal;
        }
    }
    // cleanup clause
    finally
        {
            console.log("cleaning up!");
        }
    }

    it = something1();
    for (let v of it) { //something() not something тому що не ітерований, генератор() - створює ітератор
        console.log(v);

        // don't let the loop run forever!
        if (v > 500) {
            //break;
            it.return('Value').value
        }
    }

// 1 9 33 105 321 969
// cleaning up!
























