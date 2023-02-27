export const userAuth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const data = token.split(".")[1];
    const decodedData = JSON.parse(window.atob(data));
    return decodedData;
  } else {
    return false;
  }
};
