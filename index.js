function Ladder() {
  this.step = 0;
}

function LadderPrototype() {
  this.up = function () {
    this.step++;
  };
  this.down = function () {
    this.step--;
  };
  this.showStep = function () {
    return this.step;
  };
}
Ladder.prototype = new LadderPrototype();
