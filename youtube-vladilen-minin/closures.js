// замыкание - просто ф-ция внутри другой ф-ции
// ф-ция возвращает другую ф-цию
// замыкаем параметры

//возвращает ф-цию
function createCalcFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}

createCalcFunction(2)() //для вызова исп. ()


//возвр. ф-цию
function createIncrement(n) {
    return function(num) {
        return num + n;
    }
}
//создали ф-цию, которая всегда добавляет 1
const addOne = createIncrement(1);
console.log(addOne(11))














//написать свою ф-цию bind
function bind(context, fn) {
    return function (...args) {
        console.log('args', args)
        fn.apply(context, args)
    }
}

function logPerson(hair) {
    console.log('this', this)
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}, ${hair}`)
}

const person1 = {name: 'Georg', age: 22, job: 'QA'}
const person2 = {name: 'Anna', age: 26, job: 'SMM'}

bind(person1, logPerson)('brown')
bind(person2, logPerson)()