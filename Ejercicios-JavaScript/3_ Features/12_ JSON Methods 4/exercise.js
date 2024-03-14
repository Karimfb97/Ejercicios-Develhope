class Person {    // Con el método de clase toJSON
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  toJSON() {
    return JSON.stringify({id: this.id, age: this.age});
  }
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const {id, age} = person;    // Con Deconstructuring

const json = JSON.stringify({id, age});
const json2 = new Person(2, "Carlos", "Cuartero", 26);

console.log(json); // Should return: { id: 1, age: 25 }
console.log(json2.toJSON());