//итераторы, генераторы, модули и классы.

//Итераторы
//Итератором (iterator) называется структурированный шаблон, предназначенный для последовательного извлечения информации из источника.
let arr1 = [1, 2, 3];
let it1 = arr1[Symbol.iterator]();
console.log(it1.next()); // { value: 1, done: false }
console.log(it1.next()); // { value: 2, done: false }
console.log(it1.next()); // { value: 3, done: false }
console.log(it1.next()); // { value: undefined, done: true }

//Генераторы
//Такая функция может остановиться во время выполнения, а затем
// продолжить работу с прерванного места.
//function *foo(..) { .. }.
//Внутри генераторов используется ключевое слово, сигнализирующее о прерывании работы: yield.

function* foo1() {
    while (true) {
        yield Math.random();
    }
}

let it2 = foo1();
console.log(it2.next());
console.log(it2.next());

function* foo2() {
    try {
        yield* [1, 2, 3];
    } finally {
        console.log("cleanup!");
    }
}

let it3 = foo2();
console.log(it3.next());
console.log(it3.next());
console.log(it3.return(42)); //Раннее завершение


//Применение генераторов


//Модули














