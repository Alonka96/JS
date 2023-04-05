function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
function UserPrototype() {
  this.getFullName = function () {
    return `${this.name} ${this.lastName}`;
  };
}

User.prototype = new UserPrototype();
