sum = (a, b) => a+b;

subtract = (a, b) => a-b;

multiply = (a, b) => a*b;

divide =  (a, b) => a / b;

log = (value) => console.log(value);

console.log(divide(subtract((multiply(sum(2, 4),sum(5,2))), 2), 5));