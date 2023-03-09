export const getTotal = (cartItems) => {
  let amount = 0;
  if (cartItems && cartItems.length > 0) {
    if (cartItems.length > 1) {
      for (let i = 0; i < cartItems.length; i++) {
        amount += cartItems[i].price * cartItems[i].amount;
      }
    } else {
      amount = cartItems[0].price * cartItems[0].amount;
    }
  }
  return amount;
};
