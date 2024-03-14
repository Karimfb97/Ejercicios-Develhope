class Person {
  #firstName = "";
  #lastName = "";
  #age = 0;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  // firstName
  get firstName(){
    return this.#firstName;
  }
  set firstName(newName){
    this.#firstName = newName;
  }

  // lastName
  get lastName(){
    return this.#lastName;
  }
  set lastName(newName){
    this.#lastName = newName;
  }

  // age
  get age(){
    return this.#age;
  }
  set age(newAge){
    this.#age = newAge;
  }


  // Method fullName
  fullName() {
    return `${this.firstName} ${this.lastName}, ${this.age} anios.`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName());

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName());