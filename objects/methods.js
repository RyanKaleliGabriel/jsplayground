const Manager = {
    name: "Karina",
    age: 27,
    job: "Software Engineer",
  };
  const Intern = {
    name: "Tyrone",
    age: 21,
    job: "Software Engineer Intern",
  };

  function sayHi(){
    console.log(`Hello, my name is ${this.name}`);
  }

  //add sayHi functions to both objects
  Manager.sayHi = sayHi
  Intern.sayHi = sayHi
  Manager.sayHi();
  Intern.sayHi();

//add Age and job

function intro() {
    console.log(`I am a ${this.job} and i'm ${this.age} years old`)
}
Manager.intro = intro
Intern.intro = intro
Manager.intro()
Intern.intro();