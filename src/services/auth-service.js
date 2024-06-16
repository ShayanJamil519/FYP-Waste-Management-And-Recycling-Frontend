import axios from "axios";
import apiUrl from "../utils/baseURL";
import Cookies from "js-cookie";

const token = typeof window !== "undefined" && Cookies.get("jwt");

class AuthService {
  async getAllUsers() {
    try {
      console.log("DAAAAAAAATA333");
      const { data } = await axios.get(
        `${apiUrl}/get-all-users
      `,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("DAAAAAAAATA444");
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getMyId() {
    console.log("sasdf");
    const res = await axios.get(`${apiUrl}/get-UserId`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    console.log("authhOOK");
    const userId = res.data.userId;
    console.log(userId);
    return userId;
  }
  /**
   *User Signup
   * @returns
   */

  async signUpUser(userData) {
    const res = await axios.post(`${apiUrl}/register-user`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("res-----------------");
    console.log(res);
    return res;
  }

  /**
   *User Login
   * @returns
   */

  async LoginUser(userData) {
    const res = await axios.post(`${apiUrl}/Login`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    const { token } = res.data;
    typeof window !== "undefined" && Cookies.set("jwt", token, { expires: 3 });
    return res;
  }

  /**
   *forgotPasswordUser
   * @returns
   */

  async ForgotPassword(userData) {
    const res = await axios.post(`${apiUrl}/forgotPassword`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res;
  }

  async ResetPassword(userData) {
    const res = await axios.post(`${apiUrl}/resetPassword`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log({ resp: res.data });

    return res;
  }

  //   /**
  //    *resetPasswordUser
  //    * @returns
  //    */

  //   async resetPasswordUser(userData, token) {
  //     console.log(userData);
  //     const res = await axios.put(
  //       `${apiUrl}/api/auth/resetPassword/${token}`,
  //       userData,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     return res;
  //   }

  //   async contactUs(data) {
  //     const res = await axios.post(`${apiUrl}/api/contact/contactUs`, data, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     return res;
  //   }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
