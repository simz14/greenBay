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

export const validateSellData = (
  title,

  description,
  image,
  price,
  categoryId
) => {
  if (!title || !description || !image || !price || !categoryId) {
    throw new Error("All fields are required!");
  } else {
    if (title.length > 30) {
      throw new Error("Title is too long!");
    } else {
      if (description.length > 100) {
        throw new Error("Description is too long!");
      } else {
        if (!(price > 0) || price % 1 !== 0) {
          throw new Error("Price is not correct!");
        } else {
          try {
            new URL(image);
            return true;
          } catch (err) {
            throw new Error("Url is not correct!");
          }
        }
      }
    }
  }
};

export const validateOrderData = (name, lastName, adress, city, country) => {
  if (!name || !lastName || !adress || !city || !country) {
    throw new Error("All fields are required!");
  } else {
    return true;
  }
};
