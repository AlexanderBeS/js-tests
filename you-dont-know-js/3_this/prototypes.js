//затенение

//В результате [[Get]] ищет свойство a через [[Prototype]] и получает текущее значение 2 из anotherObject.a, далее это
// значение увеличивается на 1, после чего [[Put]] присваивает значение 3 новому затененному свойству a в myObject.

let anotherObject = {
    a: 2,
};
let myObject = Object.create(anotherObject);

console.log(anotherObject.a); // 2
console.log(myObject.a); // 2
console.log(anotherObject.hasOwnProperty("a")); // true
console.log(myObject.hasOwnProperty("a")); // false

myObject.a++; //неявное затенение!

console.log(anotherObject.a); // 2
console.log(myObject.a); // 3
console.log(myObject.hasOwnProperty("a")); // true


//------------------------------
function foo() {
    return true;
}
console.log(foo.prototype) // {}

let a = new foo();
console.log(Object.getPrototypeOf(a) === foo.prototype); // true
//------------------------------

//------------------------------
//в JavaScript "конструктор" — это любая функция, вызванная с ключевым словом new перед ней.
function NothingSpecial() {
    console.log("Don't mind me!");
}

let b = new NothingSpecial();
// "Don't mind me!"

console.log('new NothingSpecial -> b', b); // NothingSpecial {}
//------------------------------
//Object.create(..) создает новый объект (bar), связанный с объектом, который мы указали (foo), и это дает нам всю мощь
// (делегирование) механизма [[Prototype]], но без ненужных сложностей вроде функции new, выступающей в роли классов и
// вызовов конструктора, сбивающих с толку ссылок .prototype и .constructor, и прочих лишних вещей.

let baz = {
    something: function () {
        console.log("Скажи что-нибудь хорошее...");
    },
};

var bar = Object.create(baz);
console.log(bar.something()); // Скажи что-нибудь хорошее...

