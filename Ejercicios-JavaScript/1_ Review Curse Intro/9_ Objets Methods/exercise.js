const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
keys = Object.keys(person);
for (k of keys) {
  console.log(`${k}: ${person[k]}`);
};