//objects
const person = {
    name: 'Alex',
    age: 27
}

//interface ProxyHandler<T extends object> {
//     apply?(target: T, thisArg: any, argArray: any[]): any;
//     construct?(target: T, argArray: any[], newTarget: Function): object;
//     defineProperty?(target: T, p: string | symbol, attributes: PropertyDescriptor): boolean;
//     deleteProperty?(target: T, p: string | symbol): boolean;
//     get?(target: T, p: string | symbol, receiver: any): any;
//     getOwnPropertyDescriptor?(target: T, p: string | symbol): PropertyDescriptor | undefined;
//     getPrototypeOf?(target: T): object | null;
//     has?(target: T, p: string | symbol): boolean;
//     isExtensible?(target: T): boolean;
//     ownKeys?(target: T): ArrayLike<string | symbol>;
//     preventExtensions?(target: T): boolean;
//     set?(target: T, p: string | symbol, value: any, receiver: any): boolean;
//     setPrototypeOf?(target: T, v: object | null): boolean;
// }

//magic methods
const op = new Proxy(person, {
    //it's a trap for get method
    get(target, prop) {
        console.log('Getting prop', prop)
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        } else {
            console.log(`No ${prop} found in target`)
        }
    },
    has(target, prop) {
        return ['name', 'age'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop)
        delete target[prop];
        return true;
    }
})

// console.log(person);
// console.log(person.name);

console.log(op.name)
console.log(op.age)

//op.test = 2;

console.log('name' in op)
console.log('test' in op)

console.log('Before deleting', op)
delete op.name;
console.log('After deleting', op);






//-------------------------------------
//functions
const log = text => `Log: ${text}`
//console.log(log('TEST'))

//check when function is called
const fp = new Proxy(log, {
    apply(target, thisArg, args) { //target = function, thisArg = context, args = params
        console.log('Calling fn..')

        return target.apply(thisArg, args); //не работает
    }
})

console.log(fp('TEST'))





//-------------------------------------
//classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, argArray, newTarget) {
        console.log('Construct');

        return new target(...argArray) //new Person по сути
    }
})


const p = new PersonProxy('Maxim', 30)
console.log(p)