class I2DShape {
  constructor(name) {
      this.name = name;
  }

  getPerimeter() {
      return 0;
  }

  getSurfaceArea() {
      return 0;
  }
}

class Circle extends I2DShape {
  constructor(name, radius) {
      super(name);
      this.radius = radius;
  }

  getPerimeter() {
      return 2 * Math.PI * this.radius;
  }

  getSurfaceArea() {
      return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends I2DShape {
  constructor(name, length, width) {
      super(name);
      this.length = length;
      this.width = width;
  }

  getPerimeter() {
      return 2 * (this.length + this.width);
  }

  getSurfaceArea() {
      return this.length * this.width;
  }

  getIsSquare() {
      return (this.length === this.width);
  }
}

let frisbee = new Circle("Frisbee", 3.25);
console.log(frisbee.name);
console.log(frisbee.getPerimeter());
console.log(frisbee.getSurfaceArea());