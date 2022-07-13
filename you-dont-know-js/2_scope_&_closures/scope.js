function foo(a) {
    console.log( a + b ); //Cannot access 'b' before initialization
    let b = a;
}

foo( 2 );