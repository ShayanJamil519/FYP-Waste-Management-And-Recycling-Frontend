import axios from "axios";
import apiUrl from "../utils/baseURL";
import Cookies from "js-cookie";

const token = typeof window !== "undefined" && Cookies.get("jwt");

class WasteMovement {
  async postWaste(data) {
    console.log("HelloJee");
    console.log(apiUrl);
    console.log(data);
    const res = await axios.post(
      `${apiUrl}/entry/create-entry`,
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

  async getWaste(subdivision) {
    const { data } = await axios.get(
      `${apiUrl}/entry/get-entry-subdivision/${subdivision}`,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new WasteMovement();
