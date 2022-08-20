//Якщо ++використовується в позиції префікса як ++a, його побічний ефект (збільшення a) відбувається до того, як вираз
// повертає значення, а не після , як у випадку з a++

let a = 42;
let b = a++;
let c = ++a;

console.log(a, b, c) // 44, 42, 44
console.log('-------------');


//Пріоритет оператора
//As we covered in Chapter 4, JavaScript's version of && and || are interesting in that they select and return one of
// their operands, rather than just resulting in true or false.
a = 42;
b = "foo";
c = [1,2,3];

console.log(a && b);	// "foo"
console.log(a || b);	// 42
console.log(a && b || c); // "foo"
console.log(a || b && c); // 42
console.log('-------------');


//try..finally
function foo1() {
    try {
        return 42;
    }
    finally {
        console.log( "Hello" );
    }

    console.log( "never runs" );
}

console.log( foo1() );
// Hello
// 42
console.log('-------------');


function foo() {
    try {
        return 42;
    }
    finally {
        // no `return ..` here, so no override
    }
}

function bar() {
    try {
        return 42;
    }
    finally {
        // override previous `return 42`
        return;
    }
}

function baz() {
    try {
        return 42;
    }
    finally {
        // override previous `return 42`
        return "Hello";
    }
}

console.log(foo());	// 42
console.log(bar());	// undefined
console.log(baz());	// "Hello"
console.log('-------------');


//switch
a = "42";

switch (true) {
    case a == 10:
        console.log( "10 or '10'" );
        break;
    case a == 42:
        console.log( "42 or '42'" );
        break;
    default:
    // never gets here
}
// 42 or '42'

console.log('-------------');


//caseспочатку проходить через усі відповідні пропозиції, не знаходить збігів, потім повертається до default
// пропозиції та починає виконуватися. Оскільки там немає break, він продовжує виконуватися у вже пропущеному case 3
// блоці, перш ніж зупинитися, коли він натрапить на цей break.
a = 10;
switch (a) {
    case 1:
    case 2:
    // never gets here
    default:
        console.log( "default" );
    case 3:
        console.log( "3" );
        break;
    case 4:
        console.log( "4" );
}
// default
// 3

console.log('-------------');