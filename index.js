function guessNum() {
  while (true) {
    let userGuess = Number(prompt("Guess number"));
    if (userGuess === num) {
      alert("You successfully guess");
      break;
    } else if (userGuess > num) {
      alert("Too much");
    } else if (userName < num) {
      alert("Not enough");
    } else {
      console.log("Error");
    }
  }
}
