
//...rest save all extra variables
function sum(a, b, ...rest) {
    console.log('REST', rest)
    console.log('REST spread ...', ...rest)
    return a + b;
}

const numbers = [123, 243, 125, 42, 17];
console.log(sum(...numbers)) //366, sum of 123, 243


// const a = numbers[0];
// const b = numbers[1];

//деструктурізація
const [a, b, ...others] = numbers
console.log(a, b, others) //123 243 [ 125, 42, 17 ]


const person = {
    name: 'Vasya',
    age: 23,
    city: 'Kyiv',
    country: 'Ukraine'
}

const {name, age, ...address} = person
console.log(name, age, address) //Vasya 23 { city: 'Kyiv', country: 'Ukraine' }












