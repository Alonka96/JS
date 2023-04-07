class Animal {
  constructor(name, amountOfLegs, type) {
    this.name = name;
    this.amountOfLegs = amountOfLegs;
    this.type = type;
  }
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = value;
  }

  get name() {
    return this._name;
  } 
  saySomething() {
    return `${this._name} making noize`;
  }

  eat() {
    return `${this._name} is eating`;
  }
}

class Dog extends Animal {
  constructor(name, amountOfLegs, type, color) {
    super(name, amountOfLegs, type);
    this.color = color;
  }

  set name (value) {
    throw new ReferenceError ('Dogs name is constant')
  }
  run() {
    return `${this._name} is running`;
  }
}
