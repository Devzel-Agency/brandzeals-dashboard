import instance from "./axiosinstance";

const Userlogin = async (email, password) => {
  const requestData = {
    email: email,
    password: password,
  };

  try {
    const response = await instance.post("/admin/login", requestData);
    console.log(response);
    localStorage.setItem("Token", response.data.token);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: error.response?.data?.error || "Unexpected error occurred" };
  }
};

export default Userlogin;