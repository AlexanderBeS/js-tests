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
bar.something(); // Скажи что-нибудь хорошее...

//----------------------------------
function Foo1() {}
let a1 = new Foo1();
Foo1.prototype.constructor = function Gotcha(){};
console.log(a1.constructor); // [Function: Gotcha]
console.log(a1.constructor.name); // "Gotcha"
console.log(a1); // {}












//--классический ("прототипный") OO стиль:
function Foo(who) {
    this.me = who;
}
Foo.prototype.identify = function() {
    return "I am " + this.me;
};

function Bar(who) {
    Foo.call( this, who );
}
Bar.prototype = Object.create( Foo.prototype );

Bar.prototype.speak = function() {
    console.log( "Hello, " + this.identify() + "." );
};

var b1 = new Bar( "b1" );
var b2 = new Bar( "b2" );

b1.speak();
b2.speak();



//код в стиле OLOO(objects-linked-to-other-objects):
var Foo2 = {
    init: function(who) {
        this.me = who;
    },
    identify: function() {
        return "I am " + this.me;
    }
};

var Bar2 = Object.create( Foo2 );

Bar2.speak = function() {
    console.log( "Hello, " + this.identify() + "." );
};

var b12 = Object.create( Bar2 );
b12.init( "b12" );
var b22 = Object.create( Bar2 );
b22.init( "b22" );

b12.speak();
b22.speak();