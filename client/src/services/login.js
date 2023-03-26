export const fetchLogin = async (data) => {
  const { email, password } = data;
  /* const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;*/
  const response = new Promise((res, rej) => {
    if (email === "user@gmail.com") {
      if (password === "user1234") {
        res({
          jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiJ1c2VyMTIzNCIsImlhdCI6MTUxNjIzOTAyMn0.vl6E8JfWxId69lmfayKV-2GW72NH3Dr8CD_K_JcG5j4",
        });
      } else {
        rej({ message: "Incorrect password!" });
      }
    } else {
      rej({ message: "Incorrect email adress!" });
    }
  });
  return response;
};
