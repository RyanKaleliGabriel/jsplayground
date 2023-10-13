//To create a class inheritance, use the extends keyword.
//A class created with a class inheritance inherits all the methods from another class:

class Car{
    constructor(name){
        this.name = name
    }
    present() {
        return "This is a "+ this.name
    }
}
class Model extends Car{
    constructor(name, model){
        super(name);
        this.model = model
    }
    show(){
        return this.present() + ", it is a " + this.model +"."
    }
}

let newCar = new Model("C250", "Mercedes Benz")
console.log(newCar.show())