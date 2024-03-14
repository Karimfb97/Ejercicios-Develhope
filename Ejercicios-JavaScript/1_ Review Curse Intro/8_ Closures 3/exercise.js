function multiplyByTwo(value) {
  let number = 2;
  inner = () => console.log(number*value);
  return inner;
}
multiplyByTwo(5)();