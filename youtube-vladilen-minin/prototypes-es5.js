//OLD CODE ES5
//наследование
const Animal = function(options) {
    this.name = options.name;
    this.color = options.color;

    //не можем менять эту ф-цию позже
    // this.voice = function () {
    //     console.log('Base voice from ', this.name);
    // }
}

//добавляем методы класу
//мы можем менять этот метод после
Animal.prototype.voice = function () {
    console.log('Base voice from ', this.name);
}

const dog = new Animal({name: 'Rex', color: 'brown'});

//пример наследования класса
const Cat = function (options) {
    Animal.apply(this, arguments) //вызываем родительский конструктор

    //конструктор
    this.isDomestic = options.isDomestic;
    this.type = 'cat';
}

Cat.prototype = Object.create(Animal.prototype); //переопределяем прототип у Cat и указываем новый, т.о. само наследование
Cat.prototype.constructor = Cat;
Cat.prototype.voice = function (arguments) {
    Animal.prototype.voice.apply(this, arguments) //вызывает родительский метод
    console.log(this.name + ' says meow.')
}

const cat = new Cat({name: 'Murzik', color: 'white', isDomestic: true});
console.log(cat);
console.log(Object.getPrototypeOf(cat));
console.log(cat.voice());
console.log(dog.voice());





//EXAMPLES

//ф-ция доступна для ЛЮБЫХ объектов
Object.prototype.print = function () {
    console.log('I am object ', this)
}

cat.print();


//не будет работать, т.к. нет своего this, создаёт пустой {}
Object.prototype.print2 = () => {
    console.log('Global this ', this)
}
cat.print2()











