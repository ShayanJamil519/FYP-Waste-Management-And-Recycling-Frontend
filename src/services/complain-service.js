import axios from "axios";
import apiUrl from "../utils/baseURL";
import Cookies from "js-cookie";
const token = Cookies.get("jwt");

class ComplainService {
  async complain(userData) {
    console.log("Hello");
    console.log(token);
    const res = await axios.post(
      `${apiUrl}/complaint/create-complaint`,
      userData,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  }

  async getComplaintsInDistrict(district) {
    // try {
      console.log("service");
      const response = await axios.get(
        `${apiUrl}/complaint/get-complaints-district/${district}`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("service");
      console.log(response)
      return response;
    // }
    //  catch (error) {
    //   throw new Error(error.response.data.message || "Internal server error");
    // }
  }
  async addResponseToComplaint(complaintId, data) {
    try {
      const response = await axios.post(
        `${apiUrl}/complaint/add-response-to-a-complaint/${complaintId}`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Internal server error");
    }
  }
}

export default new ComplainService();
