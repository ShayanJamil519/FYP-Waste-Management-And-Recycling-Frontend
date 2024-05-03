import axios from "axios";
import apiUrl from "../utils/baseURL";
import Cookies from "js-cookie";

const token = typeof window !== "undefined" && Cookies.get("jwt");

class Incentives {
  async getSubdivisionsAndUserCounts(district) {
    try {
      console.log("Service");
      const { data } = await axios.get(
        `${apiUrl}/get-subDivision/${district}`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("DATA");
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getSubdivisionComplaints(district) {
    try {
      console.log("Service");
      const { data } = await axios.get(
        `${apiUrl}/get-subDivision-complaints/${district}`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("DATA");
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  // async getPredictData(requestData) {
  //   try {
  //     const { data } = await axios.post(
  //       `${apiUrl}/predict`,
  //       {
  //         headers: {
  //           Authorization: token,
  //           "Content-Type": "application/json",
  //         },
  //       },
  //       requestData
  //     );
  //     return data;
  //   } catch (error) {
  //     console.error("Error:", error);
  //     throw new Error("Prediction failed");
  //   }
  // }

  async getPredictData(requestData) {

    const res = await axios.post(
      `${apiUrl}/predict`,
      requestData,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  }

}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Incentives();
