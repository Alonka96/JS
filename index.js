class Friend {
  /**
   * @param {String} name - Name of friend
   * @param {Number} amountCash - Amount of cash
   * @param {Friend} friend - friend of mine
   */
  constructor(name, amountCash, friend) {
    this.name = name;
    this.amountCash = amountCash;
    this.friend = friend;
  }
  getAllCash() {
    if (this.friend === null) {
      return this.amountCash;
    }
    if (this.friend instanceof Friend) {
      return this.amountCash + this.friend.getAllCash();
    }
    if (this.friend instanceof Array) {
      return this.friend.reduce((accumulator, friend) => accumulator + this.friend.getAllCash(),0);
    }
  }
}

const Fr = new Friend("Vik", 50, null);
const I = new Friend("Alice", 20, null);

const frfr = new Friend("Frfr", 50, null);

const friendOfAll = Friend("Kay", 50, [Fr, I, frfr]);
