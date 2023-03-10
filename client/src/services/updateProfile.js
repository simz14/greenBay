export const updateUserData = async (data) => {
  const [
    userId,
    changedUsername,
    changedEmail,
    currentPassword,
    changedPasword,
  ] = data;

  if (currentPassword) {
    if (changedUsername || changedEmail || changedPasword) {
      const postData = await fetch("http://localhost:8080/editProfile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userId,
          username: changedUsername,
          email: changedEmail,
          currentPassword: currentPassword,
          password: changedPasword,
        }),
      });
    } else {
      throw new Error("Atleast one field is required!");
    }
  } else {
    throw new Error("Current password is missing!");
  }
};
