//string (строка)
// number (число)
// boolean (логическое значение)
// null и undefined (пустое значение)
// object (объект)
// symbol (символ, новое в ES6)

var a;
console.log(typeof a);				// "undefined"

a = "hello world";
console.log(typeof a);				// "string"

a = 42;
console.log(typeof a);				// "number"

a = true;
console.log(typeof a);				// "boolean"

a = null;
console.log(typeof a);				// "object" — черт, ошибка

a = undefined;
console.log(typeof a);				// "undefined"

a = {b: "c"};
console.log(typeof a);				// "object"

a = Symbol();
console.log(typeof a);               // "symbol"