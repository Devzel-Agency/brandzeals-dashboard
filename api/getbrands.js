import axiosInstance from "./axiosinstance";
import getToken from "./getToken";

const getbrands = async () => {
  const token = getToken();
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.get("/admin/getbrands", {
      headers,
    });

    return response.data;
  } catch (error) {
    //console.log(error);
    return null;
  }
};
export default getbrands;
