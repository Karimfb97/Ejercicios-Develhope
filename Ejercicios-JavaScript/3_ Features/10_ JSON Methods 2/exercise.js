class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static toJson(obj) {
    return JSON.stringify(obj);
  }
  static fromJson(json) {
    return JSON.parse(json);
  }
}

let json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
json = Person.toJson(developer);

console.log(developer);
console.log(json);