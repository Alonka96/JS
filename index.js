const sum = (a, b, c) => a + b + c;
function sumAll() {
  const argArray = Array.from(arguments);
  const res = argArray.reduce(
    (accumulator, current) => accumulator + current + 0
  );
  return res;
}
