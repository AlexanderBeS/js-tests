//==================================
//семь встроенных типов:
//null
console.log(typeof null === "object"); // true
console.log(typeof undefined     === "undefined"); // true
console.log(typeof true          === "boolean");   // true
console.log(typeof 42            === "number");    // true
console.log(typeof "42"          === "string");    // true
console.log(typeof { life: 42 }  === "object");    // true
// добавлен в ES6!
console.log(typeof Symbol()      === "symbol");    // true
//==================================





//to check if is NULL
let a = null;
console.log(!a && typeof a === "object"); // true

//function
console.log(typeof function a(){ /* .. */ } === "function"); // true

//console.log(someUndefinedVariableName); //ReferenceError: someUndefinedVariableName is not defined

//-----------------------------------------------------------
//typeof для необъявленных переменных
if (typeof DEBUG !== "undefined") { //переменная СУЩЕСТВУЕТ и она ОПРЕДЕЛЕНА
    console.log( "Debugging is starting" );
}
















