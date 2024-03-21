import axios from "axios";
import apiUrl from "../utils/baseURL";
import Cookies from "js-cookie";

const token = typeof window !== "undefined" && Cookies.get("jwt");

class LandfillEntry {
  async inputEntry(data) {
    console.log("HelloJee");
    console.log(apiUrl);
    console.log(data);
    const res = await axios.post(
      `${apiUrl}/landfill/create-input-entry`,
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

  async getAllLandfills() {
    try {
      console.log("DAAAAAAAATA333")
      const {data} = await axios.get(`${apiUrl}/landfill/get-all-landfill-points`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      console.log("DAAAAAAAATA444")
      console.log(data)
      return data;
    } catch (error) {
      throw error;
    }
  };

  async useNewLandfilll(data) {
    console.log("HelloJee");
    console.log(apiUrl);
    console.log(data);
    const res = await axios.post(
      `${apiUrl}/landfill/create-landfill-point`,
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
export default new LandfillEntry();
