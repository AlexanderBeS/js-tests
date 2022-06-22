//1
function* strGenerator() { //function *strGenerator() { -> обозначает генератор
    yield 'H'; //порционно вbIдает результат
    yield 'e';
}

const str = strGenerator();
console.log(str.next()); //H
console.log(str.next()); //e

//2
function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const num = numberGen(7);
console.log(num.next()) //0
console.log(num.next()) //1

//3
const iterator = {
    gen(n = 10) {
        let i = 0

        return {
            next() {
                if (i < n) {
                    return { value: ++i, done: false}
                }
                return { value: undefined, done: true}
            }
        }
    }
}

const itr = iterator.gen(2);
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())

//4
for (let k of [1, 1, 2, 3, 5]) {
    console.log(k)
}
console.log('-------------------------');


//5
const iteratorNew = {
    [Symbol.iterator] (n = 10) { //спеціальний символ, тому що ми імітуємо генератор відповідями
        let i = 0

        return {
            next() {
                if (i < n) {
                    return { value: ++i, done: false}
                }
                return { value: undefined, done: true}
            }
        }
    }
}

for (let k of iteratorNew) {
    console.log(k)
}
console.log('-------------------------');

//6
function* iter(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}
for (let k of iter(6)) {
    console.log(k)
}