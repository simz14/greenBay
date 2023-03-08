export const validateEmail = (email) => {
  const reg = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
  return reg.test(email);
};

export const validatePassword = (password) => {
  if (password.length < 8) {
    return false;
  }
  return true;
};

export const vlidateSellData = (title, description, image, price) => {
  if (!title || !description || !image || !price) {
    return true;
  } else {
    if (price > 0 && price % 1 === 0) {
      return false;
    } else {
      try {
        new URL(url);
        return false;
      } catch (err) {
        return true;
      }
    }
  }
};
