// Arrow function ex 4
// function outerFunction(a, b) {
//     function innerFunction(c, d) {
//       return c * d;
//     }

//     let result = innerFunction(a, b);
//     return result + 10;
//   }
const outerFunction = (a, b) => {
  const innerFunction = (c, d) => {
    return c * d;
  };

  let result = innerFunction(a, b);
  return result + 10;
};
outerFunction(2, 3);