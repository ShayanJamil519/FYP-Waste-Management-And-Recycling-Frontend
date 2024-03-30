import axios from "axios";
import apiUrl from "../utils/baseURL";
import Cookies from "js-cookie";

const token = typeof window !== "undefined" && Cookies.get("jwt");

class RecyclingEntry {
  async inputEntry(data) {

    const res = await axios.post(
      `${apiUrl}/recycling/create-input-entry`,
      data,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  }

  async addResponseToRecyclingPoint(id, data) {
    try {
      console.log("IDDDDDDDDDDDDD");
      console.log(id);
      console.log(data);
      const response = await axios.put(
        `${apiUrl}/recycling/update/${id}`,
        data,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Internal server error");
    }
  }

  async deleteRecyclingPointById(id) {
    try {
      console.log("service")
      const response = await axios.delete(
        `${apiUrl}/recycling/delete-recycling-point/${id}`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw (
        error.response.data.message ||
        "Something went wrong while deleting the Recycling Point."
      );
    }
  }



  async getAllRecyclingPoints() {
    try {
      const {data} = await axios.get(`${apiUrl}/recycling/get-all-recycling-points`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  async newRecyclingPoint(data) {

    const res = await axios.post(
      `${apiUrl}/recycling/create-recycling-point`,
      data,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  }

  async outputEntry(data) {

    const res = await axios.post(
      `${apiUrl}/recycling/create-output-entry`,
      data,
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
export default new RecyclingEntry();
