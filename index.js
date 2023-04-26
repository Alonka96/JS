class Student {
  constructor(firstName, lastName, enterYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.enterYear = enterYear;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getCourse() {
    // const year = new Date().getFullYear();
    // const course = year - this.enterYear;
    // if (course > 5) {
    //   return "graduated";
    // } else {
    //   return course;
    // }

    const course = new Date().getFullYear() - this.enterYear;
    return course > 5 ? "graduated" : course;
  }
}
