//You cannot call a static method on an object, only on an object class.
class Car {
    constructor(brand){
        this._carname = brand
    }
    static hello() {
        return "Hello !"
    }
}

const myCar = new Car("Volvo")
console.log(Car.hello());

//If you want to use the myCar object inside the static method, you can send it as a parameter:
console.log(Car.hello(myCar))