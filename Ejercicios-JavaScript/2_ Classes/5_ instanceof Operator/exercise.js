class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(obj) {
    let area = 0;
    if (obj instanceof Square) {      //Square
      this.area = obj.side**2
    } else if (obj instanceof Rectangle) {
      this.area = obj.width * obj.height
    } else if (obj instanceof Circle) {
      this.area = Math.round(Math.PI * obj.radius**2)
    } else {
      return "El objeto que desea calcular no se encuentra en la lista."
    }
    return `El ${obj.constructor.name} tiene un area de ${this.area}u.`
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(2);
const triangle = 0;

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
console.log(AreaCalculator.calculate(triangle));