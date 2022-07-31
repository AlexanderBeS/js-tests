//Литеральный синтаксис для объекта выглядит так:
const myObj1 = {
    key: 'value'
};

//Конструкторная форма выглядит так:
const myObj2 = new Object();
myObj2.key = 'value';

//Конструкторная форма выглядит так:
const myObj3 = {};
myObj3.key = 'value';



//copy objects
//1
//var newObj = JSON.parse( JSON.stringify( someObj ) );

//2
//Он проходит по всем перечисляемым (см. ниже), собственным ключам (существующим непосредственно) в исходном объекте(тах)
// и копирует их (только через присваивание =) в целевой объект. Кроме того, удобно, что он возвращает целевой объект, как показано ниже:
//var newObj = Object.assign( {}, myObject );


//Дескрипторы свойств

//узнать доступно ли свойство только для чтения или нет.
// var myObject = {
//     a: 2
// };
// Object.getOwnPropertyDescriptor( myObject, "a" );
// {
// value: 2,
// writable: true,
// enumerable: true,
// configurable: true
// }

// добавления нового или изменения существующего свойства
//var myObject = {};
// Object.defineProperty( myObject, "a", {
//     value: 2,
//     writable: true,
//     configurable: true,
//     enumerable: true
// } );
// myObject.a; // 2


//Константа объекта
// var myObject = {};
// Object.defineProperty( myObject, "FAVORITE_NUMBER", {
//     value: 42,
//     writable: false,
//     configurable: false
// } );

//Запрет расширения
//var myObject = {
//     a: 2
// };
// Object.preventExtensions( myObject );
// myObject.b = 3;
// myObject.b; // undefined



//Геттеры и Сеттеры
//    // определим геттер для `a`
//     get a() {
//         return this._a_;
//     },
//     // определим сеттер для `a`
//     set a(val) {
//         this._a_ = val * 2;
//     }
// };
// myObject.a = 2;
// myObject.a; // 4



//Существование
//var myObject = {
//     a: 2
// };
// ("a" in myObject);	            // true
// ("b" in myObject);	            // false
// myObject.hasOwnProperty( "a" );	// true
// myObject.hasOwnProperty( "b" );	// false






