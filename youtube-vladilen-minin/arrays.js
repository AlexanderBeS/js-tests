const people = [
    {name: 'Sasha', age: 27, budget: 10000},
    {name: 'Anna', age: 25, budget: 4300},
    {name: 'Masha', age: 19, budget: 1800},
    {name: 'Sergey', age: 27, budget: 20050},
    {name: 'Dasha', age: 16, budget: 300},
];

//for
console.log('-----------FOR 1-----------');
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

console.log('-----------FOR 2-----------');
for (let person of people) {
    console.log(person)
}

//ForEach
console.log('-----------FOREACH-----------');
// people.forEach(function (person) {
//     console.log(person)
// })

people.forEach((person) => console.log(person))

//Map - створює новий масив
console.log('-----------MAP-----------');
const newPeopleMap = people.map(person => {
    return person;
})
console.log(newPeopleMap)

//Filter
console.log('-----------FILTER-----------');
// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })
const adults = people.filter(person => (person.age >= 18));
console.log(adults)

//Reduce
console.log('-----------REDUCE-----------');
//на кожній ітерації змінюємо total і повертаємо, 0 - стартове значення total
const amount = people.reduce((total, person) => total + person.budget, 0)
console.log(amount);

//Find
//пошук за певним параметром, return only first match
console.log('-----------FIND-----------');
const findRes = people.find(person => person.age > 25);
console.log(findRes)

//FindIndex
console.log('-----------FINDINDEX-----------');
const findIndexRes = people.findIndex(person => person.name === 'Dasha');
console.log(findIndexRes)

//functions chain
const newPeople = people
    .filter(person => person.budget > 1000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })
const newAmount = newPeople.reduce((total, person) => total + person.budget, 0)

console.log(newPeople)
console.log(newAmount)