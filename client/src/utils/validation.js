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
