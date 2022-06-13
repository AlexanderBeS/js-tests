//this указывает на тот объект в контексте которого он был вызван

function hello() {
    console.log('Hello', this);
}

//hello();
//<ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 33.50220000743866,
//       nodeStart: 0.465800017118454,
//       v8Start: 1.8465999960899353,
//       bootstrapComplete: 21.861600011587143,
//       environment: 11.187600016593933,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1655129329725.717
//   },
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   }
// }


const person = {
    name: 'Alex',
    age: 27,
    sayHello: hello,
    sayHelloGlobal: hello.bind({a: 'b'}), //bind - прикрепляет контекст, который будет привязан к ф-ции
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log('Name is ' + this.name);
        console.log('Age is ' + this.age);
        console.log('Job is ' + job);
        console.log('Phone is ' + phone);
        console.groupEnd();
    }
}

person.sayHello();
//Hello { name: 'Alex', sayHello: [Function: hello] }
person.sayHelloGlobal(); //Hello { a: 'b' }
person.logInfo(); //Name is Alex

const anna = {
    name: 'Anna',
    age: 26
}

//BIND
const fnAnnaInfoLog1 = person.logInfo.bind(anna); //возвращает новую ф-цию с привязанным контекстом, () -> вызов
fnAnnaInfoLog1('SMM', '10502713133');

//alternative
const fnAnnaInfoLog2 = person.logInfo.bind(anna, 'SMM', '20502713133'); //передаём сразу
fnAnnaInfoLog2();

//CALL
person.logInfo.call(anna, 'SMM', '30502713133'); //сразу вызывает эту ф-цию, в отличии от bind.

//APPLY
//всегда 2 параметра, второй - массив, сразу вызывает, разница с call чисто в параметрах.
person.logInfo.apply(anna, ['SMM', '40502713133'])


//prototype
const arr = [1, 2, 3, 4, 5];
Array.prototype.multBy = function (x) {
    console.log('multBy ', this)
    return this.map(function (i) {
        return i * x;
    })
}

console.log(arr.multBy(2));