const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

/*  Obtenemos Simon en ambos porque person2 está asignado por referencia y por lo tanto no es una copia independiente del objeto person1  */
