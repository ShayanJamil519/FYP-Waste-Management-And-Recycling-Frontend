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
    const { data } = await axios.get(
      `${apiUrl}/complaint/get-complaints-district/${district}`,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );

    return data;
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
// eslint-disable-next-line import/no-anonymous-default-export
export default new ComplainService();
