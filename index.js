function Worker(firstName, lastName, rate, days) {
  this.firstName = firstName;
  this.lastName = lastName;
  if (rate < 0) {
    this.rate = 0;
  } else {
    this.rate = rate;
  }
  if ((days = 0)) {
    this.days = 0;
  } else {
    this.days = days;
  }

  this.getSalary = function () {
    return this.days * this.rate;
  };
}
