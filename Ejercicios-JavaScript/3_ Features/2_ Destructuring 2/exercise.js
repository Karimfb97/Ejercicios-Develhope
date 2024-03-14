const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const [id, firstName, lastName, age] = Object.values(person)

console.log(id, firstName, lastName, age);