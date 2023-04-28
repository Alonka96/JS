function guesNumber() {
  alert("Figure number from 0 to 100");
  let start = 0;
  let end = 100;
  let middle = Math.round((start + end) / 2);
  while (true) {
    if (confirm(`Your number is ${middle}?`)) {
      return middle;
    }
    if (confirm(`${middle} > than your number?`)) {
      end = middle;
      middle = Math.floor((start + end) / 2);
    } else {
      start = middle;
      middle = Math.ceil((start + end) / 2);
    }
  }
}
