class Car {
    constructor(name, year){
        this.name = name
        this.year = year
    }

    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const car1 = new Car("Audi", 2019)
console.log("This car is "+ car1.age() + " years old.");