class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isBanned = false;
  }
}
class Moderator extends User {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.isBanned = undefined;
    this.position = "Moderator";
  }
  getBan(user) {
    user.isBanned = true;
  }

  toggleBan(user) {
    user.isBanned = !user.isBanned;
  }
}
class Admin extends Moderator {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.position = "Admin";
  }
}
