//Массив

//У конструктора Array(..) есть всем известная странность. Если
// передать ему только один числовой аргумент, будет создан не мас-
// сив из одного элемента, а пустой массив со свойством length, рав-
// ным переданному числу.

let arr1 = Array(3);
console.log(arr1.length); // 3
console.log(arr1[0]);//undefined

let arr2 = Array.of(3);
console.log(arr2.length); // 1
console.log(arr2[0]);//3


let arrLike = {
    length: 3,
    0: "foo",
    1: "bar"
};
let arr3 = Array.from(arrLike);
console.log(arr3) //[ 'foo', 'bar', undefined ]
console.log(arr3.length) //3


//Создание массивов и подтипы
//class MyCoolArray extends Array {
// // принудительно превращаем 'species' в родительский
// конструктор
// static get [Symbol.species]() { return Array; }
// }
// var x = new MyCoolArray( 1, 2, 3 );
// x.slice( 1 ) instanceof MyCoolArray; // false
// x.slice( 1 ) instanceof Array; // true


//Метод прототипа copyWithin(..)
//Метод copyWithin(..) копирует фрагмент
// массива в другую позицию, переписывая бывшие там ранее значе-
// ния.

//Его аргументы — target (индекс позиции, в которую осуществля-
// ется копирование), start (начальный индекс позиции источника
// копируемых элементов) и по желанию end (конечный индекс по-
// зиции источника).

console.log([1, 2, 3, 4, 5].copyWithin(3, 0)); // [1,2,3,1,2]
console.log([1, 2, 3, 4, 5].copyWithin(3, 0, 1)); // [1,2,3,1,5]
console.log([1, 2, 3, 4, 5].copyWithin(0, -2)); // [4,5,3,4,5]
console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1)); // [4,2,3,4,5]


//Метод прототипа fill(..)
//Заполнение существующего массива полностью (или частично)
// одним значением поддерживается в ES6 при помощи метода
// Array#fill(..):
let arr4 = [null, null, null, null].fill(42, 1, 3); //[ null, 42, 42, null ]
console.log(arr4)

//Метод прототипа find(..)
let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.find(function matcher(v) {
    return v == "2";
})); // 2
console.log(arr5.find(function matcher(v) {
    return v == 7; // undefined
}));

//some
console.log(arr5.some(function matcher(v) {
    return v == "2";
})); // true
console.log(arr5.some(function matcher(v) {
    return v == 7; // false
}));

//indexOf
console.log(arr5.indexOf(3) != -1); // true
console.log(arr5.indexOf(7) != -1); // false
console.log(arr5.indexOf("2") != -1); // false


//Метод прототипа findIndex(..)


let points = [
    {x: 10, y: 20},
    {x: 20, y: 30},
    {x: 30, y: 40},
    {x: 40, y: 50},
    {x: 50, y: 60}
];
console.log(points.findIndex(function matcher(point) {
    return (
        point.x % 3 == 0 &&
        point.y % 4 == 0
    );
})); // 2
console.log(points.findIndex(function matcher(point) {
    return (
        point.x % 6 == 0 &&
        point.y % 7 == 0
    );
})); // -1


//Методы прототипа entries(), values(), keys()
let arr6 = [1, 2, 3];
console.log([...arr6.values()]); // [1,2,3]
console.log([...arr6.keys()]); // [0,1,2]
console.log([...arr6.entries()]); // [ [0,1], [1,2], [2,3] ]
console.log([...arr6[Symbol.iterator]()]); // [1,2,3]

//Объект
//Статическая функция Object.is(..)
//Статическая функция Object.is(..) сравнивает значения еще более строгим образом, чем оператор ===.

let x = NaN, y = 0, z = -0;
console.log(x === x); // false
console.log(y === z); // true
console.log(Object.is(x, x)); // true
console.log(Object.is(y, z)); // false

//Для строгих сравнений нужно пользоваться оператором ===; не
// следует рассматривать метод Object.is(..) как его замену. Но
// в случаях, когда требуется строго идентифицировать значение NaN
// или -0, вам поможет Object.is(..).

//Статическая функция Object.getOwnPropertySymbols(..)
//извлекающий из объектов исключительно их символьные свойства:

let symBar = Symbol("bar");
let o = {
    foo: 42,
    [symBar]: "hello world",
    baz: true
};
console.log(Object.getOwnPropertySymbols(o)); // [ Symbol(bar) ]
console.log(o[symBar]); // [ Symbol(bar) ]

//Статическая функция Object.setPrototypeOf(..)
let o1 = {
    foo() {
        console.log("foo");
    }
};
let o2 = {
// .. определение o2 ..
};
Object.setPrototypeOf(o2, o1);
// делегирует в 'o1.foo()'
o2.foo(); // foo



//Статическая функция Object.assign(..)













