export const getTotal = (cartItems) => {
  if (cartItems && cartItems.length > 0) {
    if (cartItems.length > 1) {
      return cartItems.reduce((a, b) => {
        return a.price * a.amount + b.price * b.amount;
      });
    } else {
      return cartItems[0].price * cartItems[0].amount;
    }
  }
};
