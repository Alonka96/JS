function Car(brand, maxSpeed = 200) {
  this.brand = brand;
  this.maxSpeed = maxSpeed;
  this.speed = 0;

  this.accelerate = function (value) {
    this.speed += value;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    return this.speed;
  };

  this.deaccelerate = function (value) {
    this.speed -= value;
    if (this.speed < 0) {
      this.speed = 0;
    }
    return this.speed;
  };

  this.stop = function () {
    this.speed = 0;
    return this.speed;
  };
}

const bmv = new Car("BMV", 250);
