function drowEmptySquare(dim) {
  let str = "";
  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      if (i === 0 || i === dim - 1 || j === dim - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }

  console.log(str);
}
drowEmptySquare(8);
