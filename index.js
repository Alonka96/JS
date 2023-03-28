function pow(base, powNumber){
  let result = 1;
  for(let i = 1; i <= powNumber; i++) {
    result *= base;
  }
  return result;
}