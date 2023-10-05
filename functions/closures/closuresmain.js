// In the code above, the name variable of the outer function is accessible
// to the inner functions, and there is no other way to access the inner variables 
// except through the inner functions. The inner variables of the inner functions 
// act as safe stores for the outer arguments and variables. They hold "persistent" 
// and "encapsulated" data for the inner functions to work with. The functions do not
//  even have to be assigned to a variable, or have a name.
const createPet = function (name) {
  let sex;

  const pet = {
    setName(newName) {
        name = newName;
    },
    getName(){
        return name;
    },
    getSex(){
        return sex;
    },
    setSex(newSex){
        if(
            typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")
        ) {
            sex = newSex;
        }
    }
  };
  return pet;
};


const pet = createPet("Oreo")
console.log(pet.getName())
pet.setSex("female")
console.log(pet.getSex())

