//ARRAYS
function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        undefined,
        a / b,
    ]
}

//1 variant
const result = calcValues(45, 15) //[ 60, 30 ]
const sum = result[0]
const sub = result[1]

//2 variant
const [sum1, sub2] = calcValues(45, 15);
console.log(sum1, sub2) //60 30

const [,, mult, test = 'Метод пуст', ...other] = calcValues(45, 15); // with coma skip previous values
console.log(mult) //675
console.log(other) //[ 3 ]
console.log(test) //Метод пуст




//OBJECTS
const person = {
    name: 'Petro',
    age: 23,
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    }
}

const {
    name: firstName, //name: firstName -> use the new variable name instead of obj key
    age,
    INVALID,
    address: {city: homeTown, country}
} = person
console.log(firstName, age, INVALID, homeTown, country) //Petro 23 undefined Kyiv Ukraine

const {name, ...info} = person
console.log(info) //{ age: 23, address: { city: 'Kyiv', country: 'Ukraine' } }

//example
// function logRerson(per) {
//     console.log(per.name + '' + per.age)
// }

function logPerson({name, age}) {
    console.log(name + ' ' + age)
}

logPerson(person) //Petro 23




