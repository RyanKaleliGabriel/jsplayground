//It can be smart to use getters and setters for your properties, 
//especially if you want to do something special with the value before returning them, 
//or before you set them.



class Car{
    constructor(brand){
        this._carname = brand
    }
    get carName (){
        return this._carname
    }
    set carName(x) {
        this._carname = x
    }
}

const newCar = new Car("Volvo");
//even if the getter is a method, you do not use parentheses when you want to get the property value.
console.log(newCar.carName)


//To use a setter, use the same syntax as when you set a property value, without parentheses:
newCar.carName = "BMW"
console.log(newCar.carName)