const person1 = {
    name: 'Sasha'
}

//default
//enumerable: false - манипулировать данными
//writable: false - изменять св-ва
//configurable: false - удалять ключи из объекта

const person = Object.create(
    //задаём прототип объекта
    {
        calculateAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear)
        }
    }, {
        name: {
            value: 'Sasha',
            enumerable: true,
            writable: true,
            configurable: true
        },
        surname: {
            value: 'Bes',
            enumerable: true,
        },
        birthYear: {
            value: 1995,
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                console.log('Set age', value)
            }
        }
    })

console.log(person) //{ name: 'Sasha', surname: 'Bes' }, {} если не указывать enumerable

person.name = 'Vasya';
person.surname = 'Vas';
console.log(person); //{ name: 'Vasya', surname: 'Bes' }

delete person.surname
console.log(person); //{ name: 'Vasya', surname: 'Bes' }

console.log(person.age); //27
person.age = 100; //Срабатывает set метод. Set age 100

person.calculateAge(); //метод из прототипа, Age: 27


