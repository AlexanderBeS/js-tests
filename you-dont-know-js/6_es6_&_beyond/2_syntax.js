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
    console.log("bar called!");
    return y + val;
}

function foo2(x = y + 3, z = bar1(x)) {
    console.log(x, z);
}

//Destructuring
//let { x: x, y: y, z: z } = bar();
//let { x, y, z } = bar();
//let { x: bam, y: baz, z: bap } = bar();
//console.log( bam, baz, bap );

//Repeated Assignments
// var { a: X, a: Y } = { a: 1 };
//
// X;	// 1
// Y;	// 1

//Nested Destructuring
let a1 = [1, [2, 3, 4], 5];
let o1 = {x: {y: {z: 6}}};

let [a2, [b, c, d], e] = a1;
let {x: {y: {z: w}}} = o1;

console.log(a2, b, c, d, e);		// 1 2 3 4 5
console.log(w);					// 6

//Destructuring Parameters
function foo3([x, y]) {
    console.log(x, y);
}

foo3([1, 2]);					// 1 2
foo3([1]);						// 1 undefined
foo3([]);							// undefined undefined
//-----
function foo4({x, y}) {
    console.log(x, y);
}

foo4({y: 1, x: 2});				// 2 1
foo4({y: 42});					// undefined 42
foo4({});							// undefined undefined


//Concise Properties
let x4 = 2, y4 = 3;
let o2 = {
    x4, // x4: x4
    y4 //y4: y4
};
console.log(o2)

//Concise Methods
let o3 = {
    x() { //x: function(){
        // ..
    },
    y() { //y: function(){
        // ..
    }
}


//ES5 Getter/Setter
let o4 = {
    __id: 10,
    get id() {
        this.__id++;
        console.log('get id', this.__id);
    },
    set id(v) {
        this.__id = v;
        console.log('set id', this.__id);
    }
}

o4.id; // 11
o4.id; // 12
o4.id = 20; //20
o4.id; // 21
console.log('o4.__id', o4.__id); // 21
console.log('o4.__id', o4.__id); // 21 -- still!


//Computed Property Names
// let prefix = "user_";
// let o5 = {
//     baz: function(..){ .. },
//     [ prefix + "foo" ]: function(..){ .. },
//     [ prefix + "bar" ]: function(..){ .. }
//     ..
// };


//Setting [[Prototype]]
//var o1 = {
// 	// ..
// };
//
// var o2 = {
// 	// ..
// };
//
// Object.setPrototypeOf( o2, o1 );


//Interpolated Expressions
function upper(s) {
    return s.toUpperCase();
}

let who = "reader";
let text =
    `A very ${upper("warm")} welcome
to all of you ${upper(`${who}s`)}!`;

console.log(text);
// A very WARM welcome
// to all of you READERS!


//Tagged Template Literals
function foo5(strings, ...values) {
    console.log(strings);
    console.log(values);
}

let desc = 'awesome';
foo5`Everything is ${desc}!`;
// [ "Everything is ", "!"]
// [ "awesome" ]


//Arrow Functions
function foo6(x, y) {
    return x + y;
}

// в сравнении с
// let foo7 = (x, y) => x + y;
//
// var f1 = () => 12;
// var f2 = x => x * 2;
// var f3 = (x, y) => {
//     var z = x * 2 + y;
//     y++;
//     x *= 3;
//     return (x + y + z) / 2;
// };


//Неформатированные строки
function showraw(strings, ...values) {
    console.log( strings );
    console.log( strings.raw );
}
showraw`Hello\nWorld`;
// [ 'Hello\nWorld' ]
//     [ 'Hello\\nWorld' ]


//Стрелочные функции
//Такое внимание к синтаксису => объясняется главным образом возможностью уменьшить количество набираемого текста,
// убрав из кода ключевые слова function, return и фигурные скобки { .. }.

//var self = this;

//Иначе говоря, из-за динамический природы связывания с помощью ключевого слова this
// мы возвращаемся к предсказуемости лексического контекста через переменную self.

//Внутри них контекст исполнения, связанный с ключевым словом this, становится не динамическим, а лексическим.



//var controller = {
// makeRequest: (..) => {
// // ..
// this.helper(..);
// },
// helper: (..) => {
// // ..
// }
// };

//указатель в данном случае лексически наследует окружающий контекст.

// Конкретные правила при менения стрелочных функций.
//
//  При наличии короткого встроенного функционального вы-
// ражения, состоящего из одного оператора, возвращающего
// вычисленное значение и не имеющего внутри ссылки с клю-
// чевым словом this или с переменной self (рекурсии, связывание/открепление
// событий), причем только если вы уверены, что эти вещи там никогда не появятся, скорее
// всего, вы можете переписать код с применением стрелочных
// функций.
//
//  При наличии внутреннего функционального выражения,
// связанного с объявлением var self = this или с вызовом
// .bind(this) в охватывающей функции, для гарантии коррект-
// ного связывания с помощью this это выражение, скорее
// всего, можно без проблем превратить в стрелочную функцию.
//
//  При наличии внутреннего функционального выражения, свя-
// занного, например, с объявлением var args = Array.prototype.
// slice.call(arguments) в охватывающей функции, для создания
// лексической копии аргументов это выражение, скорее всего,
// можно без проблем превратить в стрелочную функцию.
//
//  В остальных случаях — таких как обычные объявления функ-
// ций, более длинные, состоящие из нескольких операторов
// функциональные выражения, функции, которым требуется
// ссылка на лексический именной идентификатор self (при
// рекурсии и т. п.), и все прочие функции, не отвечающие при-
// веденным выше характеристикам, — имеет смысл избегать
// синтаксиса с =>.

//Подытожим: синтаксис с => касается лексического контекста таких
// вещей, как this, arguments и super при обратных вызовах. Стрелоч-
// ные функции разработаны специально для решения некоторых
// часто возникающих проблем.


//Цикл for..of (массив, строка, генератор, коллекции)
//Значение, которое вы просматриваете с помощью цикла for..of,
// должно быть итерируемым или же допускающим приведение к итерируемому объекту
let arr1 = ["a","b","c","d","e"];
for (let idx in arr1) {
    console.log( idx );
}
// 0 1 2 3 4
for (let val of arr1) {
    console.log( val );
}
// "a" "b" "c" "d" "e"


//Расширения числовых литералов
console.log(Number( "42" )); // 42
console.log(Number( "0o52" )); // 42
console.log(Number( "0x2a" )); // 42
console.log(Number( "0b101010" )); // 42

let number1 = 42;
console.log(number1.toString()); // "42" — кроме того, 'a.toString( 10 )'
console.log(number1.toString( 8 )); // "52"
console.log(number1.toString( 16 )); // "2a"
console.log(number1.toString( 2 )); // "101010"


//Unicode
//Диапазон от 0x0000 до 0xFFFF содержит все стандартные печатные
// символы (из разных языков), которые вам только доводилось ви-
// деть или использовать. Эта группа символов называется базовой
// многоязыковой плоскостью (BMP — basic multilingual plane).

//До появления ES6 строки JavaScript определяли символы Unicode
// через escape-последовательности. Например:
// var snowman = "\u2603";
// console.log( snowman ); // "☃ "

//Стандарт ES6 дал нам новую форму escape-последовательности
// Unicode (в строках и регулярных выражениях), так называемую
// escape-последовательность кодовых точек:
// var gclef = "\u{1D11E}";
// console.log( gclef ); // ""

//Операции со строками,
// поддерживающие Unicode

//Как точно вычислить длину такой строки? В данном сценарии
// хорошо работает следующий трюк:
// var gclef = "";
// [...gclef].length; // 1
// Array.from( gclef ).length; // 1


//.normalize()!!!


//Тип данных Symbol
let sym = Symbol( "необязательное описание" );
console.log(typeof sym); // "symbol"
console.log(sym.toString()); // "Symbol(необязательное описание)"

//Главным образом он применяется для создания напоминающего
// строку значения, которое не конфликтует ни с каким другим. Его
// можно использовать, к примеру, как константу, представляющую
// имя события:

const EVT_LOGIN = Symbol( "event.login" );


//Встроенные символы



































































