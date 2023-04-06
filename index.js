class Worker {
  constructor(name, rate, days) {
    this.name = name;
    if (rate < 0) {
      throw new RangeError("Rate must be more than zero");
    } else {
      this._rate = rate;
    }
    if (days < 0) {
      throw new RangeError("Days must be more than zero");
    } else {
      this._days = days;
    }
  }

  // setRate(value) {
  //   if (typeof value !== "number") {
  //     throw new TypeError("Rate must be a number");
  //   }
  //   if (value < 0) {
  //     throw new RangeError("Rate must be more than zero");
  //   }
  //   this._rate = value;
  // }
  set rate(value) {
    // тут необхідні перевірки
    this._rate = value;
  }

  get rate() {
    return this._rate;
  }

  // setDays(value) {
  //   if (typeof value !== "number") {
  //     throw new TypeError("Days must be a number");
  //   }
  //   if (value < 0) {
  //     throw new RangeError("Days must be more than zero");
  //   }
  //   this._days = value;
  // }

set days(value) {
  // перевіряємо передане значення на правильність
  this._days = value;
}
get days() {
  return this._days;
}

  getSalary() {
    return this.rate * this.days;
  }
}
