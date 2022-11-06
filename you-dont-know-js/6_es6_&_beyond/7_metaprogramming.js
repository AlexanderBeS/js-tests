//Метапрограммированием называется программирование, при котором целью операций является поведение самой программы.
// Другими словами, это программирование программирования вашей программы.

//Метапрограммирование концентрируется на одной или нескольких задачах из следующего списка:
// код, анализирующий сам себя;
// код, модифицирующий сам себя;
// код, модифицирующий поведение языка по умолчанию и влияющий при этом на другой код.

//Цель метапрограммирования — применение возможностей языка для того, чтобы сделать остальной код более осмысленным,
// выразительным и/или гибким.

//Имена функций
let abc = function () {
// ..
};
console.log(abc.name); // "abc"

let cde = function def() {
// ..
};
console.log(cde.name); // "def"

//Метасвойства
class Parent {
    constructor() {
        if (new.target === Parent) {
            console.log("Создан экземпляр родителя");
        } else {
            console.log("Создан экземпляр потомка");
        }
    }
}

class Child extends Parent {
}

let a = new Parent();
// Создан экземпляр родителя
let b = new Child();
// Создан экземпляр потомка


//Известные символы
//Symbol.iterator @@iterator
let arr = [4, 5, 6, 7, 8, 9];
for (let v of arr) {
    console.log(v); // 4 5 6 7 8 9
}

// определяем итератор, продуцирующий значения
// только из нечетных индексов
arr[Symbol.iterator] = function* () {
    let idx = 1;
    do {
        yield this[idx];
    } while ((idx += 2) < this.length);
};
for (let v of arr) {
    console.log(v);
}
// 5 7 9

//Одна из наиболее распространенных задач метапрограммирова-
// ния — это анализ значений и определение их типа, позволяющий
// понять, какие операции с ними можно проделывать.

//Symbol.toStringTag и Symbol.hasInstance
function Foo(greeting) {
    this.greeting = greeting;
}

Foo.prototype[Symbol.toStringTag] = "Foo";

Object.defineProperty(Foo, Symbol.hasInstance, {
    value: function (inst) {
        return inst.greeting === "hello";
    }
});
let a1 = new Foo("hello"),
    b1 = new Foo("world");
b1[Symbol.toStringTag] = "cool";
console.log(a1.toString()); // [object Foo]
console.log(String(b1)); // [object cool]
console.log(a1 instanceof Foo); // true
console.log(b1 instanceof Foo); // false

//Символ @@toStringTag прототипа (или самого экземпляра) указы-
// вает строковое значение, которое будет использоваться в строковом
// описании объекта по умолчанию.
// Символ @@hasInstance представляет собой метод в функции кон-
// структора, который получает значение экземпляра объекта и воз-
// вращает true или false, тем самым показывая, можно ли считать
// его экземпляром.


//Symbol.species
//контролирующим, каким конструктором воспользуются встроенные
// методы класса, которому нужно породить новые экземпляры.
//Чаще всего этот символ требуется в ситуации, когда при наличии
// класса, производного от Array, нужно определить, какой конструк-
// тор (Array(..) или подкласса) должен использовать такие унасле-
// дованные методы, как slice(..). По умолчанию вызванный для
// экземпляра подкласса Array метод slice(..) породит новый экземпляр
// этого подкласса.


class Cool {
// отдаем '@@species' производному конструктору
    static get [Symbol.species]() {
        return this;
    }

    again() {
        return new this.constructor[Symbol.species]();
    }
}

class Fun extends Cool {
}

class Awesome extends Cool {
// принудительно превращаем '@@species' в родительский конструктор
    static get [Symbol.species]() {
        return Cool;
    }
}

let a2 = new Fun(),
    b2 = new Awesome(),
    c2 = a2.again(),
    d2 = b2.again();
console.log(c2 instanceof Fun); // true
console.log(d2 instanceof Awesome); // false
console.log(d2 instanceof Cool); // true

//Symbol.toPrimitive
//ToPrimitive, применяющаяся, когда объект
// нужно превратить в примитивное значение для дальнейшей об-
// работки

//В ES6 появился символ @@toPrimitive, который, как свойство лю-
// бого объектного значения, можно настроить для приведения
// ToPrimitive, указав соответствующий метод.

let numArr = [1, 2, 3, 4, 5];
console.log(numArr + 10); // 1,2,3,4,510
numArr[Symbol.toPrimitive] = function (hint) {
    if (hint == "default" || hint == "number") {
        // суммируем все числа
        return this.reduce(function (acc, curr) {
            return acc + curr;
        }, 0);
    }
};
console.log(numArr + 10); // 25

//Symbol.isConcatSpreadable
//следует ли расширить его, когда он передается методу массива concat(..).

let a3 = [1, 2, 3],
    b3 = [4, 5, 6],
    c3 = [4, 5, 6];
b3[Symbol.isConcatSpreadable] = false;
console.log([].concat(a3, c3)); // [ 1, 2, 3, 4, 5, 6 ]
console.log([].concat(a3, b3)); // [ 1, 2, 3, [ 4, 5, 6, [Symbol(Symbol.isConcatSpreadable)]: false ] ]


//Прокси
//Это особый вид объекта, который «заключает в себя» другой, обыч-
// ный объект (или располагается перед ним).

let obj = {a: 1},
    handlers1 = {
        get(target, key, context) {
            // примечание: target === obj,
            // context === pobj
            console.log("accessing: ", key);
            return Reflect.get(
                target, key, context
            );
        }
    },
    pobj = new Proxy(obj, handlers1);

console.log(obj.a); // 1
console.log(pobj.a); // accessing: a //1

//Вот список обработчиков, которые можно задать через прокси для целевого объекта/функции, а также информация о том,
// как и когда они активируются.

// get(..)
// Через [[Get]], доступ к свойству — через прокси-объект
// (Reflect.get(..), оператор свойства . или оператор свойства
// [ .. ]).

// set(..)
// Через [[Set]], значение свойства задается в прокси-объекте
// (Reflect.set(..), оператор присваивания = или деструктури-
// рующее присваивание, если целью является свойство объ-
// екта).

// deleteProperty(..)
// Через [[Delete]], свойство удаляется из прокси-объекта
// (Reflect.deleteProperty(..) или delete).
// apply(..) (если цель — функция)
// Через [[Call]], прокси-объект вызывается как обычная функ-
// ция/метод (Reflect.apply(..), call(..), apply(..) или опе-
// ратор вызова (..)).

// construct(..) (если цель — функция конструктора)
// Через [[Construct]], прокси-объект вызывается как функция
// конструктора (Reflect.construct(..) или new).

// getOwnPropertyDescriptor(..)
// Через [[GetOwnProperty]], из прокси-объекта извлекается
//дескриптор свойства (Object.getOwnPropertyDescriptor(..)
// или Reflect.getOwnPropertyDescriptor(..)).

// defineProperty(..)
// Через [[DefineOwnProperty]], в прокси-объекте задается де-
// скриптор свойства (Object.defineProperty(..) или Reflect.defineProperty(..)).

// getPrototypeOf(..)
// Через [[GetPrototypeOf]], извлекается [[Prototype]] прокси-
// объекта (Object.getPrototypeOf(..), Reflect.getPrototypeOf(..),
// __proto__, Object#isPrototypeOf(..) или instanceof).

// setPrototypeOf(..)
// Через [[SetPrototypeOf]], задается [[Prototype]] прокси-объ-
// екта (Object.setPrototypeOf(..), Reflect.setPrototypeOf(..)
// или __proto__).

// preventExtensions(..)
// Через [[PreventExtensions]], прокси-объект делается нерас-
// ширяемым (Object.preventExtensions(..) или Reflect.
// preventExtensions(..)).

// isExtensible(..)
// Через [[IsExtensible]], проверяется расширяемость прокси-
// объекта (Object.isExtensible(..) или Reflect.isExtensible(..)).

// ownKeys(..)
// Через [[OwnPropertyKeys]], извлекается набор собственных
// свойств и/или собственных символьных свойств прокси-объ-
// екта (Object.keys(..), Object.getOwnPropertyNames(..), Object.
// getOwnSymbolProperties(..), Reflect.ownKeys(..) или JSON.stringify(..)).

// enumerate(..)
// Через [[Enumerate]], запрашивается итератор для перечис-
// лимых собственных и «унаследованных» свойств прокси-
// объекта (Reflect.enumerate(..) или for..in).

// has(..)
// Через [[HasProperty]], проверяется наличие у прокси-объ-
// екта собственного или «унаследованного» свойства (Reflect.
// has(..), Object#hasOwnProperty(..) или "prop" в obj).


//Прокси в начале, прокси в конце
// Как упоминалось выше, обычно считается, что прокси «заключает
// в себя» целевой объект. В этом смысле он становится основным
// объектом, с которым связывается код, а реальный целевой объект
// остается скрытым/защищенным.
// Такие вещи делаются, например, когда нужно передать объект
// в какое-то место, которому нельзя полностью «доверять», а значит,
// нужно ввести специальные правила доступа.


let messages = [],
    handlers = {
        get(target, key) {
            // строковое значение?
            if (typeof target[key] == "string") {
                // отфильтровываем пунктуацию
                return target[key].replace(/[^\w]/g, "");
            }
            // передаем все остальное
            return target[key];
        },
        set(target, key, val) {
            // задаются только уникальные строки, нижний регистр
            if (typeof val == "string") {
                val = val.toLowerCase();
                if (target.indexOf(val) === -1) {
                    target.push(
                        val.toLowerCase()
                    );
                }
            }
            return true;
        }
    },
    messages_proxy = new Proxy(messages, handlers);

messages_proxy.push(
    "heLLo...", 42, "wOrlD!!", "WoRld!!"
);

console.log('messages_proxy', messages_proxy); //[ 'hello...', 'world!!' ]
messages_proxy.forEach(function (val) {
    console.log(val);
}); // hello world

console.log('messages', messages); //[ 'hello...', 'world!!' ]
messages.forEach(function (val) {
    console.log(val);
}); // hello... world!!




//Reflect API
//Reflect представляет собой обычный объект (такой же, как, напри-
// мер, объект Math), а не функцию/конструктор, как другие встроен-
// ные элементы.
//С ним связаны статические функции, позволяющие выполнять
// различные задачи метапрограммирования. Они имеют однозначные
// соответствия среди методов-обработчиков (перехватчиков), опре-
// деленных для прокси-объектов.


//Reflect.ownKeys(..)
// Возвращает список всех собственных ключей (не «унаследо-
// ванных»), как методы Object.getOwnPropertyNames(..)
// и Object.getOwn PropertySymbols(..). См. следующий раздел
// «Порядок свойств».

// Reflect.enumerate(..)
// Возвращает итератор, который производит набор всех ключей,
// не являющихся символьными (собственных и «унаследован-
// ных»), но при этом перечислимых (см. книгу this &Object
// Prototypes). По сути, этот набор ключей совпадает с тем, кото-
// рый обрабатывается циклом for..in. Информацию о порядке
// следования ключей см. в разделе «Порядок свойств».

// Reflect.has(..)
// По сути, представляет собой оператор, проверяющий, при-
// надлежит свойство объекту или цепочке [[Prototype]] этого
// объекта. Например, метод Reflect.has(o,"foo") проверяет
// наличие строки "foo" в объекте o.

//Reflect.apply(..)
// Так, запись Reflect.apply(foo,thisObj,[42,"bar"]) вызывает
// функцию foo(..) с thisObj на месте ключевого слова this,
// передавая в нее в качестве аргументов значения 42 и "bar".

// Reflect.construct(..)
// Например, запись Reflect.construct(foo,[42,"bar"]), по сути,
// вызывает оператор new foo(42,"bar").
// Вручную можно также выполнять доступ к свойствам объекта, их
// настройку и удаление. Для этого применяются следующие методы.

// Reflect.get(..)
// Так, запись Reflect.get(o,"foo") извлекает свойство o.foo.

// Reflect.set(..)
// Например, запись Reflect.set(o,"foo",42) выполняет при-
// сваивание o.foo = 42.

// Reflect.deleteProperty(..)
// Например, запись Reflect.deleteProperty(o,"foo") удаляет
// свойство o.foo.





//Тестирование функциональных особенностей
//Это проверка, которую вы делаете, чтобы определить, доступна какая-либо
// из них или нет.




