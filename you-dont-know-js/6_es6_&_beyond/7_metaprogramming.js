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
    static get [Symbol.species]() { return this; }
    again() {
        return new this.constructor[Symbol.species]();
    }
}
class Fun extends Cool {}
class Awesome extends Cool {
// принудительно превращаем '@@species' в родительский конструктор
    static get [Symbol.species]() { return Cool; }
}
let a2 = new Fun(),
    b2 = new Awesome(),
    c2 = a2.again(),
    d2 = b2.again();
console.log(c2 instanceof Fun); // true
console.log(d2 instanceof Awesome); // false
console.log(d2 instanceof Cool); // true











