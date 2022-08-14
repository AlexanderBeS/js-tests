//примус, принуждение
//Перетворення значення з одного типу в інший часто називається «приведенням типу», якщо воно виконується явно, і
// «примусом», якщо воно виконується неявно (обумовлене правилами використання значення).

//приведення JavaScript завжди призводить до одного зі скалярних примітивних значень (див. Розділ 2),
// наприклад string, number або boolean

let a = 42;
let b = a + "";			// неявний string конкатенація
let c = String( a );	// явний примус

console.log('a ', a, typeof a); //42 number
console.log('b ', b, typeof b); //42 string
console.log('c ', c, typeof c); //42 string

//Операції над абстрактними значеннями
//ToString
// multiplying `1.07` by `1000`, seven times over
a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;
// seven times three digits => 21 digits
console.log(a.toString()); // "1.07e21"

a = [1,2,3];
console.log(a.toString()); // "1,2,3"

//Стрінгифікація JSON
console.log(JSON.stringify( undefined ));					// undefined
console.log(JSON.stringify( function(){} ));					// undefined
console.log(JSON.stringify( [1,undefined,function(){},4] ));	// "[1,null,null,4]"
console.log(JSON.stringify( { a:2, b:function(){} } ));		// "{"a":2}"

a = {
    b: 42,
    c: "42",
    d: [1,2,3]
};
console.log(JSON.stringify( a, ["b","c"] )); // "{"b":42,"c":"42"}"
console.log(JSON.stringify( a, null, 3 ));
// "{
//    "b": 42,
//    "c": "42",
//    "d": [
//       1,
//       2,
//       3
//    ]
// }"
console.log(JSON.stringify( a, null, "-----" ));
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
console.log(Number( "" ));			// 0
console.log(Number( [] ));			// 0
console.log(Number( [ "abc" ] ));	// NaN

//ToBoolean











