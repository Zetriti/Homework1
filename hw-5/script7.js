const circle1 = {
  radius: 3,
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 7,
  getArea: function() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

console.log("circle1:");
console.log("Радиус:", circle1.radius);
console.log("Площадь:", circle1.getArea());
console.log("Периметр:", circle1.getPerimeter());

console.log("\ncircle2:");
console.log("Радиус:", circle2.radius);
console.log("Площадь:", circle2.getArea());
console.log("Периметр:", circle2.getPerimeter());