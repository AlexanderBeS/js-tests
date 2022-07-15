//1
//все объявления как переменных, так и функций, обрабатываются в первую очередь,
// до того как будет выполнена любая часть вашего кода.
a = 2;
var a;
console.log( a ); //2

//2
//Когда видите var b = 2;
// Но JavaScript на самом деле думает о нем как о двух операторах: var a; и a = 2;.
// Первый оператор, объявление, обрабатывается во время фазы компиляции.
// Второй оператор, присваивание, остается на своем месте в фазе исполнения
console.log( b ); //undefined
var b = 2;


//3
//Идентификатор переменной foo поднимается и присоединяется к включающей его области видимости (глобальной) этой программы,
// поэтому foo() не вызовет ошибки ReferenceError. Но в foo пока еще нет значения (как если бы это было объявление
// обычной функции вместо выражения). Поэтому, foo() пытается вызвать значение undefined, которое является
// неправильной операцией с вызовом ошибки TypeError.
// foo(); // TypeError
// bar(); // ReferenceError
//
// var foo = function bar() {
//     // ...
// };

//4
//Как объявления функций, так и переменных поднимаются. Но тонкость (которая поможет объяснить множественные объявления
// "дубликатов" в коде) в том, что сперва поднимаются функции, а затем уже переменные.
//in js
// foo(); // 1
//
// var foo;
//
// function foo() {
//     console.log( 1 );
// }
//
// foo = function() {
//     console.log( 2 );
// };
