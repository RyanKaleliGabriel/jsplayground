const data = {
  name: "John",
  age: 30,
  cars: ["Ford", "BMW", "Fiat"],
};


for(let i in data.cars)
{
    console.log("Car number "+[i] +" is "+ data.cars[i])
}