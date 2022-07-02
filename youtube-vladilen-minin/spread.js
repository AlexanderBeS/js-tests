//ARRAYS
const citiesEurope = ['Berlin', 'Prague', 'Paris'];
const citiesUkraine = ['Kyiv', 'Lviv', 'Dnipro'];

//... helps to combine new arrays
console.log(citiesUkraine); //[ 'Kyiv', 'Lviv', 'Dnipro' ]
console.log(...citiesUkraine); //Kyiv Lviv Dnipro

const copiedCities = [...citiesUkraine, ...citiesEurope];
const copiedCitiesOld = citiesUkraine.concat(citiesEurope);
console.log(copiedCities)
console.log(copiedCitiesOld)


//OBJECTS
const citiesEuropeWithPopulation = {
    Berlin: 20, Prague: 8, Paris: 15, Kyiv: 26,
};
const citiesUkraineWithPopulation = {
    Kyiv: 15, Lviv: 8, Dnipro: 10
};

console.log(citiesEuropeWithPopulation) //{ Berlin: 20, Prague: 8, Paris: 15, Kyiv: 26 }
//console.log(...citiesEuropeWithPopulation) //TypeError: Found non-callable @@iterator
console.log({...citiesEuropeWithPopulation}) //{ Berlin: 20, Prague: 8, Paris: 15, Kyiv: 26 }
const copiedCitiesWitPopulation = {...citiesEuropeWithPopulation, ...citiesUkraineWithPopulation};
console.log(copiedCitiesWitPopulation) //{ Berlin: 20, Prague: 8, Paris: 15, Kyiv: 15, Lviv: 8, Dnipro: 10 } - kyiv is replaced from last obj


//PRACTICE
const numbers = [5, 37, 24, 12];
console.log(Math.max(5, 37, 24, 12))
console.log(Math.max(...numbers))








