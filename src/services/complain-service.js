import axios from "axios";
import apiUrl from "../utils/baseURL";
import Cookies from 'js-cookie';
const token = Cookies.get('jwt');

class ComplainService {

  async complain(userData) {
    console.log("Hello");
    console.log(token);
    const res = await axios.post(`${apiUrl}/complaint/create-complaint`, userData, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },

    });
    return res;
  }


}

export default new ComplainService();
