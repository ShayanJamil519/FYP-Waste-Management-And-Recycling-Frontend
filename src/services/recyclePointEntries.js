import axios from "axios";
import apiUrl from "../utils/baseURL";
import Cookies from "js-cookie";

const token = typeof window !== "undefined" && Cookies.get("jwt");

class RecyclingEntry {
  async inputEntry(data) {
    console.log("HelloJee");
    console.log(apiUrl);
    console.log(data);
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

  async outputEntry(data) {
    console.log("HelloJee");
    console.log(apiUrl);
    console.log(data);
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
