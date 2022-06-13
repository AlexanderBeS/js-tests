class TestClass {
    #sum;

    constructor() {
        this.#sum = 0;
    }

    add(number) {
        console.log('add method before', this.#sum);
        this.#sum += number;
        console.log('add method after', this.#sum);
    }

    getSum() {
        console.log('getSum method', this.#sum);
        return this.#sum;
    }

}

module.exports = TestClass;
