function restOpRefactor({id, ...rest}) {
  console.log(id, rest);
  return id, rest;        // Duda de si se pueden devolver dos así
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id, ...personInfo} = person;

console.log(id, personInfo);
console.log(restOpRefactor(person));