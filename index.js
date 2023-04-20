// function createAdder(n) {
//   return function (m) {
//     return (n = n + m);
//   };
// }

const createAdder = (n) => (m) => (n = n + m);
// const innerFun = createAdder(5);
