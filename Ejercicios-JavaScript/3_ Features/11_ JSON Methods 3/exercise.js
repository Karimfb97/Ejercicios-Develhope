const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

const person2 = JSON.parse(JSON.stringify(person1));
person2.address.city = 'Milan';

const person3 = {...person1};
person3.address = {...person1.address};
person3.address.city = "Bolonia";

console.log(person1);
console.log(person2);
console.log(person3);