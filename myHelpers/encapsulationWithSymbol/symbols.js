class Car {
  constructor(model, color) {
    const MODEL = Symbol();
    const COLOR = Symbol();
    this[MODEL] = model;
    this[COLOR] = color;
    this.getModel = () => this[MODEL];
    this.getColor = () => this[COLOR];
    this.setModel = (model) => {
      this[MODEL] = model;
    } 
    this.setColor = (color) => {
      this[COLOR] = color;
    } 
    get color() {
      return this[COLOR];
    }

  }
}

const myCar = new Car('VW', 'red');
console.log(myCar);
console.log("myCar's color: ", myCar.color);
console.log(myCar.getColor());
myCar.setColor('green');
console.log(myCar.getColor());
