//примус, принуждение
//Перетворення значення з одного типу в інший часто називається «приведенням типу», якщо воно виконується явно, і
// «примусом», якщо воно виконується неявно (обумовлене правилами використання значення).

//приведення JavaScript завжди призводить до одного зі скалярних примітивних значень (див. Розділ 2),
// наприклад string, number або boolean

let a = 42;
let b = a + "";			// неявний string конкатенація
let c = String(a);	// явний примус

console.log('a ', a, typeof a); //42 number
console.log('b ', b, typeof b); //42 string
console.log('c ', c, typeof c); //42 string

//Операції над абстрактними значеннями
//ToString
// multiplying `1.07` by `1000`, seven times over
a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;
// seven times three digits => 21 digits
console.log(a.toString()); // "1.07e21"

a = [1, 2, 3];
console.log(a.toString()); // "1,2,3"

//Стрінгифікація JSON
console.log(JSON.stringify(undefined));					// undefined
console.log(JSON.stringify(function () {
}));					// undefined
console.log(JSON.stringify([1, undefined, function () {
}, 4]));	// "[1,null,null,4]"
console.log(JSON.stringify({
    a: 2, b: function () {
    }
}));		// "{"a":2}"

a = {
    b: 42,
    c: "42",
    d: [1, 2, 3]
};
console.log(JSON.stringify(a, ["b", "c"])); // "{"b":42,"c":"42"}"
console.log(JSON.stringify(a, null, 3));
// "{
//    "b": 42,
//    "c": "42",
//    "d": [
//       1,
//       2,
//       3
//    ]
// }"
console.log(JSON.stringify(a, null, "-----"));
// "{
// -----"b": 42,
// -----"c": "42",
// -----"d": [
// ----------1,
// ----------2,
// ----------3
// -----]
// }"


//ToNumber
console.log(Number(""));			// 0
console.log(Number([]));			// 0
console.log(Number(["abc"]));	// NaN

//ToBoolean

//false values:
//undefined
// null
// false
// +0, -0, and NaN
// ""

let z = "false";
let x = "0";
let v = "''";
let n = [];
let m = {};
let l = function () {
};
let d = Boolean(z && x && v && n && m && l);
console.log(d); //true


//Явний примус
//Explicitly: Strings <--> Numbers
a = 42;
b = String(a);

c = "3.14";
d = Number(c);
console.log(b); // "42"
console.log(d); // 3.14

b = a.toString();
d = +c;
console.log(b); // "42"
console.log(d); // 3.14

//Date To number
d = new Date("Mon, 18 Aug 2014 08:53:06 CDT");
console.log(+d); //1408369986000
console.log(+new Date()); //1660551490848
console.log(new Date().getTime()); //1660551490848

//Цікавий випадок ~
//Порозрядне перевертання
//~x приблизно те саме, що -(x+1)
console.log(~42); //-43
console.log(~0); //-1
console.log(~1); //-2
console.log(~-1); //0

console.log(Math.floor(-49.6)); //-50
console.log(~~-49.6); //-49
console.log(-49.6 | 0); // -49

//Пріоритет операторів різний
console.log(~~1E20 / 10);		// 166199296
console.log(1E20 | 0 / 10);		// 1661992960
console.log((1E20 | 0) / 10);	// 166199296


//Явно: розбір числових рядків
a = "42";
b = "42px";

console.log(Number(a));	// 42
console.log(parseInt(a));	// 42

console.log(Number(b));	// NaN
console.log(parseInt(b));	// 42

console.log(parseInt(0.000008));		// 0   ("0" from "0.000008")
console.log(parseInt(0.0000008));		// 8   ("8" from "8e-7")
console.log(parseInt(false, 16));		// 250 ("fa" from "false")
console.log(parseInt(parseInt, 16));	// 15  ("f" from "function..")

console.log(parseInt("0x10"));			// 16
console.log(parseInt("103", 2));		// 2


//Explicitly: * --> Boolean


console.log(Boolean("0")); //true
console.log(Boolean([])); //true
console.log(Boolean({})); //true

console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false

//Так само, як унарний +оператор приводить значення до a number(див. вище), унарний !оператор заперечення явно
// приводить значення до boolean
console.log(!!("0")); //true
console.log(!!([])); //true
console.log(!!({})); //true

console.log(!!("")); //false
console.log(!!(0)); //false
console.log(!!(null)); //false
console.log(!!(undefined)); //false


//--------------------------------------------
//Неявний примус
//будь-які перетворення типів, які не є очевидними


//Неявне спрощення
//Неявно: Strings <--> Numbers

console.log("42" + "0") //"420"
console.log(42 + 0) //42
console.log([1, 2] + [3, 4]) //"1,23,4"

console.log("3.14" - 0); //3.14


//Оператори || і &&

//For the || operator, if the test is true, the || expression results in the value of the first operand (a or c).
// If the test is false, the || expression results in the value of the second operand (b).

//Inversely, for the && operator, if the test is true, the && expression results in the value of the second operand (b).
// If the test is false, the && expression results in the value of the first operand (a or c).

console.log(42 || "abc"); //42
console.log(42 && "abc"); //'abc'
console.log(null || "abc"); //'abc'
console.log(null && "abc"); //null

//a || b;
// // roughly equivalent to:
// a ? a : b;
//
// a && b;
// // roughly equivalent to:
// a ? b : a;


//Loose Equals vs. Strict Equals

//Правильний опис такий: « == дозволяє примус у порівнянні рівності та === забороняє примус».
//The correct description is: "== allows coercion in the equality comparison and === disallows coercion."

//Абстрактна рівність
//Якщо Type(x) — це число, а Type(y) — це String, поверніть результат порівняння x == ToNumber(y).
// Якщо Type(x) — String, а Type(y) — Number, поверніть результат порівняння ToNumber(x) == y.
console.log("42" == 42) //true, виконується неявне приведення
console.log("42" === 42) //false


//Якщо Type(x) є логічним, повертає результат порівняння ToNumber(x) == y.
// Якщо Type(y) є логічним, поверніть результат порівняння x == ToNumber(y).
//The Type(x) is indeed Boolean, so it performs ToNumber(x), which coerces true to 1. Now, 1 == "42" is evaluated.
console.log(true == "42") //false
console.log(!!"42") //true

//"42" дійсно правдивий, але "42" == true він взагалі не виконує логічний тест/примус , незалежно від того, що говорить
// ваш мозок. "42" не приводиться до boolean( true), а натомість trueприводиться до 1, а потім "42"примушується до 42.

//Comparing: nulls to undefineds
//If x is null and y is undefined, return true.
// If x is undefined and y is null, return true.

a = null;
let g;

console.log('-----------------');
console.log(a == g);		// true
console.log(a == null);	// true
console.log(g == null);	// true

console.log(a == false);	// false
console.log(g == false);	// false
console.log(a == "");	// false
console.log(g == "");	// false
console.log(a == 0);		// false
console.log(g == 0);		// false


//Comparing: objects to non-objects
//If Type(x) is either String or Number and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
// If Type(x) is Object and Type(y) is either String or Number, return the result of the comparison ToPrimitive(x) == y.
console.log('-----------------');
console.log(42 == [42]); // true
console.log('abc' == Object('abc')); // true
console.log('abc' === Object('abc')); // false

//Помилкові порівняння
console.log('-----------------');
console.log("0" == null);			// false
console.log("0" == undefined);		// false
console.log("0" == false);			// true -- UH OH!
console.log("0" == NaN);			// false
console.log("0" == 0);				// true
console.log("0" == "");				// false

console.log(false == null);			// false
console.log(false == undefined);	// false
console.log(false == NaN);			// false
console.log(false == 0);			// true -- UH OH!
console.log(false == "");			// true -- UH OH!
console.log(false == []);			// true -- UH OH!
console.log(false == {});			// false

console.log("" == null);			// false
console.log("" == undefined);		// false
console.log("" == NaN);				// false
console.log("" == 0);				// true -- UH OH!
console.log("" == []);				// true -- UH OH!
console.log("" == {});				// false

console.log(0 == null);				// false
console.log(0 == undefined);		// false
console.log(0 == NaN);				// false
console.log(0 == []);				// true -- UH OH!
console.log(0 == {});				// false

//The Crazy Ones
console.log('-----------');
console.log([] == ![]);	//true
console.log([2] == 2);	//true
console.log("" == [null]);	//true


//Abstract Relational Comparison
console.log('-------------------')
console.log([42] < ["43"]) //true
console.log([42] > ["43"]) //false
console.log(["42"] < ["043"]) //false , "42" is compared character by character to "043"
console.log([ 4, 2 ] < [ 0, 4, 3 ]) //false


console.log('-------------------')
a = { b: 42 };
b = { b: 43 };

console.log(a < b);	// false
console.log(a == b); // false
console.log(a > b);	// false

//Оскільки в специфікації сказано для a <= b, він фактично обчислить b < a спочатку, а потім заперечить цей результат.
// Оскільки b < a є також false , результат a <= b є true.
console.log(a <= b);	// true
console.log(a >= b);	// true





