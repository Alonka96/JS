class Worker {
  constructor(name, rate, days) {
    this.name = name;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }
}
