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
      try {
        const postData = await fetch("http://localhost:8080/editprofile", {
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

        return postData;
      } catch (e) {
        return e.message;
      }
    } else {
      throw new Error("At least one field is required!");
    }
  } else {
    throw new Error("Current password is missing!");
  }
};
