//let declaration
{
    let a = 2;
    {
        let a = 3;
        console.log(a);	// 3
    }

    console.log(a);		// 2
}

//--------
{
    console.log(a);	// undefined

    try {
        console.log(b);	// ReferenceError! ReferenceError: Cannot access 'b' before initialization
    } catch (e) {
        console.log('error', e.message)
    }

    var a;
    let b;
}


//--------
{
    // `a` is not declared
    if (typeof a === "undefined") {
        console.log("cool");
    }

    // `b` is declared, but in its TDZ
    try {
        if (typeof b === "undefined") {		// ReferenceError!
            // ..
        }
    } catch (e) {
        console.log('error', e.message)
    }


    // ..

    let b;
}


//Spread/Rest
function foo(x, y, z) {
    console.log(x, y, z);
}

foo(...[1, 2, 3]); // 1 2 3

//In this usage, ... is basically replacing concat(..), as it behaves like [1].concat( a, [5] ) here.
let x = [2, 3, 4];
let y = [1, ...x, 5];

console.log(y);	// [1,2,3,4,5]

//-------
function foo1(x, y, ...z) {
    console.log(x, y, z);
}

foo1(1, 2, 3, 4, 5); // 1 2 [3,4,5]


//Default Value Expressions
function bar1(val) {
    console.log( "bar called!" );
    return y + val;
}

function foo2(x = y + 3, z = bar1( x )) {
    console.log( x, z );
}

//Destructuring





