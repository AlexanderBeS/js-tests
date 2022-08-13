//Вот список часто используемых стандартных объектов:
//
// String()
// Number()
// Boolean()
// Array()
// Object()
// Function()
// RegExp()
// Date()
// Error()
// Symbol() -- добавлено в ES6!

let s = new String("Hello World!");
console.log(s); // [String: 'Hello World!']
console.log(s.toString()); // "Hello World!"
console.log(typeof s); // "object" ... не "String"
console.log(s instanceof String); // true


//Внутреннее свойство [[Class]]
console.log(Object.prototype.toString.call( [1,2,3] ));			// "[object Array]"
console.log(Object.prototype.toString.call( /regex-literal/i ));	// "[object RegExp]"
console.log(Object.prototype.toString.call( null ));			// "[object Null]"
console.log(Object.prototype.toString.call( undefined ));	// "[object Undefined]"
console.log(Object.prototype.toString.call( "abc" ));	// "[object String]"
console.log(Object.prototype.toString.call( 42 ));		// "[object Number]"
console.log(Object.prototype.toString.call( true ));		// "[object Boolean]"

//Обертки
//нет никакой причины использовать форму объекта напрямую. Лучше просто позволить боксу происходить неявно там, где это
// необходимо. Другими словами, никогда не делайте такие вещи, как new String("abc"), new Number(42) и т. д.
// Всегда предпочитайте использовать литеральные примитивные значения "abc" и 42.

//Распаковка
let a = new String( "abc" );
let b = new Number( 42 );
let c = new Boolean( true );

console.log(a.valueOf()); // "abc"
console.log(b.valueOf()); // 42
console.log(c.valueOf()); // true


//Встроенные объекты как конструкторы
//Array(..)

a = new Array( 1, 2, 3 );
console.log(a); // [1, 2, 3]

b = [1, 2, 3];
console.log(b); // [1, 2, 3]

c = Array( 1, 2, 3 );
console.log(c); // [1, 2, 3]

//Конструктор Array имеет специальную форму, в которой, если передается только один аргумент number, вместо того,
// чтобы предоставлять это значение как содержимое массива, оно берется как длина для «предварительного размера
// массива» (ну, вроде как).
//
// Это ужасная идея.
a = new Array( 3 );

console.log(a.length); // 3
console.log(a); //[ <3 empty items> ]

//Object(..), Function(..), and RegExp(..)
// Конструкторы Object(..)/Function(..)/RegExp(..) также обычно необязательны (и поэтому их обычно следует избегать,
// если они специально не требуются):
let name = "Kyle";
let namePattern = new RegExp( "\\b(?:" + name + ")+\\b", "ig" );
let someText = 'asd asda sc ascacaca';
let matches = someText.match( namePattern );


//Symbol(..)
//Символы — это специальные «уникальные» (не строго гарантированные!) значения, которые можно использовать в качестве
// свойств объектов, практически не опасаясь каких-либо столкновений. В первую очередь они предназначены для
// специального встроенного поведения конструкций ES6, но вы также можете определить свои собственные символы.

//В ES6 есть несколько предопределенных символов, доступ к которым осуществляется как к статическим свойствам
// функционального объекта Symbol, например, Symbol.create, Symbol.iterator и т.д. Чтобы использовать их, сделайте что-то вроде:
//obj[Symbol.iterator] = function(){ /*..*/ };

let mysym = Symbol( "my own symbol" );
console.log(mysym);				// Symbol(my own symbol)
console.log(mysym.toString());	// "Symbol(my own symbol)"
console.log(typeof mysym); 		// "symbol"

a = { };
a[mysym] = "foobar";
console.log(Object.getOwnPropertySymbols( a )); // [ Symbol(my own symbol) ]
//Хотя символы на самом деле не являются приватными (Object.getOwnPropertySymbols(..) отражает объект и раскрывает
// символы довольно публично), их использование для приватных или специальных свойств, вероятно, является их основным
// вариантом использования.


//Прототипы встроенных объектов
//Примечание: По соглашению, принятому в документации, String.prototype.XYZ сокращается до String#XYZ, и аналогично для всех остальных .prototype.
//
// String#indexOf(..): найти позицию в строке другой подстроки
// String#charAt(..): получить доступ к символу в позиции в строке
// String#substr(..), String#substring(..), and String#slice(..): извлечь часть строки как новую строку
// String#toUpperCase() and String#toLowerCase(): создать новую строку, которая преобразуется в верхний или нижний регистр
// String#trim(): создать новую строку, лишенную всех конечных или начальных пробелов














