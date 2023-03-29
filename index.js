function isEmpty(obj) {
  for (const key in object) {
    if(obj[key]) {
      return false;
    }
  }
  return true;
}