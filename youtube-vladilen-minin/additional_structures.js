const obj = {
    name: 'Alex',
    age: 27,
    job: 'Backend developer'
}

const entries = [
    ['name', 'Alex'],
    ['age', 27],
    ['job', 'Backend developer'],
    ['test_field', 'data'],
]

console.log(Object.entries(obj)) // object -> array [ [ 'name', 'Alex' ], [ 'age', 27 ], [ 'job', 'Backend developer' ] ]
console.log(Object.fromEntries(entries)) // array -> object { name: 'Alex', age: 27, job: 'Backend developer' }

//MAP
const map = new Map(entries)
console.log(map) //Map(3) { 'name' => 'Alex', 'age' => 27, 'job' => 'Backend developer' }
console.log(map.get('job')) //'Backend developer'

map.set('newField', 42)
    .set(obj, 'Value of object')

console.log(map)
//Map(5) {
//   'name' => 'Alex',
//   'age' => 27,
//   'job' => 'Backend developer',
//   'newField' => 42,
//   { name: 'Alex', age: 27, job: 'Backend developer' } => 'Value of object'
// }

const isDeleted = map.delete('test_field');
console.log(isDeleted, map.has('test_field'))

console.log(map.size); //5
// map.clear(); //clear all data
// console.log(map.size); //0


//---------------------
console.log('ENTRIES: ', map.entries())
console.log('VALUES: ', map.values())
console.log('KEYS: ', map.keys())

for (let [key, value] of map) {
    //console.log(key, value)
}

map.forEach((val, key, m) => {
    //console.log(val, key)
})

//---------------------
const array = Array.from(map)


//SET
console.log('--------------SET-------------');
const set = new Set([1, 2, 3, 3, 3, 3, 4, 5, 5, 6])
// console.log(set) //{ 1, 2, 3, 4, 5, 6 }
// set.add(20).add(30)
// console.log(set.has(30)) //true
// console.log(set.size) //8
// console.log(set.delete(1)) //true
// console.log(set.size) //7
// set.clear()
// console.log(set.size) //0

//key = value
console.log(set.values()) //{ 1, 2, 3, 4, 5, 6 }
console.log(set.keys()) //{ 1, 2, 3, 4, 5, 6 }
console.log(set.entries())
// {
//   [ 1, 1 ],
//   [ 2, 2 ],
//   [ 3, 3 ],
//   [ 4, 4 ],
//   [ 5, 5 ],
//   [ 6, 6 ]
// }

function uniqValues(array) {
    return Array.from(new Set(array))
}

console.log(uniqValues([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5])) //[ 1, 2, 3, 4, 5 ]


//WEAKMAP
console.log('--------------WEAKMAP-------------');
let objTestWeakmap = {name: 'weakmap'}
const arr = [objTestWeakmap];
objTestWeakmap = null
console.log(objTestWeakmap, arr[0]) //null { name: 'weakmap' } - витік памяті

let objInWeakmap = {name: 'weakmap'}
const objWeakmap = new WeakMap([
    [objInWeakmap, 'obj data']
])
// get set delete has
objInWeakmap = null
console.log(objWeakmap.get(obj)); //undefined
console.log(objWeakmap.has(obj)); //false

console.log(objWeakmap) //{ <items unknown> }


//----------------
const cache = new WeakMap();
function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {name: 'Elena'}
let nikita = {name: 'Nikita'}

cacheUser(lena)
cacheUser(nikita)

console.log(cache.has(lena)) //true
console.log(cache.has(nikita)) //true

lena = null
console.log(cache.has(lena)) //false








//WEAKSET
console.log('--------------WEAKSET-------------');

const users = [
    {name: 'Alex'},
    {name: 'Masha'},
    {name: 'Dasha'},
]

const visits = new WeakSet();
visits.add(users[0]).add(users[1])
console.log(visits.has(users[0])) //true
console.log(visits.has(users[1])) //true

users.splice(1, 1)
console.log(visits.has(users[0])) //true
console.log(visits.has(users[1])) //false