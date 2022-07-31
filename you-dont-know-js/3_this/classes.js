//Конструктор
class CoolGuy {
    specialTrick = 'nothing';

    constructor( trick ) {
        this.specialTrick = trick
    }

    showOff() {
        console.log( "Зацените мой трюк: " + this.specialTrick )
    }
}

const Joe = new CoolGuy( "Прыжок через скакалку" )
Joe.showOff() // Зацените мой трюк: прыжок через скакалку

//Наследование классов
class Vehicle {
    engines = 1

    ignition() {
        console.log( "Завожу двигатель." )
    }

    drive() {
        this.ignition()
        console.log( "Двигаюсь вперёд!" )
    }
}

class Car extends Vehicle {
    wheels = 4

    drive() {
        super.drive()
        console.log( "Еду на всех ", this.wheels, " колёсах!" )
    }
}

class SpeedBoat extends Vehicle {
    engines = 2

    ignition() {
        console.log( "Завожу мои ", this.engines, " двигатели." )
    }

    pilot() {
        super.drive()
        console.log( "Скольжу по воде с ветерком!" )
    }
}

const car = new Car();
car.drive()

const boat = new SpeedBoat();
boat.pilot()



//Полиморфизм

