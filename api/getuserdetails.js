import instance from "./axiosinstance";

const getCurrentUserDetails = async (token) => {

  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await instance.get("/student/getStudent", {
      headers,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    localStorage.removeItem("Token");
    window.location.href = "/";

    return null;
  }

};
export { getCurrentUserDetails };