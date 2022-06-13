class Animal {
    constructor(options) {
        this.name = options.name;
        this.color = options.color;
    }

    voice() {
        console.log('Basic voice from ', this.name)
    }
}

const dog = new Animal({name: 'Rex', color: 'brown'});
console.log(dog);
console.log(dog.voice());
console.log(Object.getPrototypeOf(dog));

class Cat extends Animal {
    constructor(props) {
        super(props); //родительский

        this.isDomestic = props.isDomestic;
        this.type = 'cat';
    }

    voice() {
        //super.voice(); //вызов метода родительского класса
        console.log(this.name + ' says meow.')
    }
}

const cat = new Cat({name: 'Murzik', color: 'white', isDomestic: true});
console.log(cat)
console.log(cat.voice())