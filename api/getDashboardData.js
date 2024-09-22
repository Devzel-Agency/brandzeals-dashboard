import axiosInstance from "./axiosinstance";
import getToken from "./getToken";


const getDashboarddata = async () => {
  const token=getToken()
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.get("/admin/getdashboarddata", {
      headers,
    });

    return response.data;
  } catch (error) {
    //console.log(error);
    return null;
  }
};
export default getDashboarddata;
