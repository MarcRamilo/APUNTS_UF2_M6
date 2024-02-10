//Arrow function ex 2
// Function to arrow function

// function calculateTotal(price, quantity) {
//     let total = price * quantity;
//     if (price > 10) {
//       total = total * 0.9;
//     }
//     return total;
//   }

const calculateTotal = (price, quantity) => {
  let total = price * quantity;

  if (price > 10) {
    total = total * 0.9;
  }

  return total;
};

calculateTotal(2, 3);
