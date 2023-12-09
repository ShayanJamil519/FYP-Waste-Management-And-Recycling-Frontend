import axios from "axios";
import apiUrl from "../utils/baseURL";

class AuthService {
  /**
   *User Signup
   * @returns
   */

  async signUpUser(userData) {
    console.log("Hello");
    const res = await axios.post(`${apiUrl}/register-user`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }

  /**
   *User Login
   * @returns
   */

  async LoginUser(userData) {
    const res = await axios.post(`${apiUrl}/Login-user`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }

  /**
   *forgotPasswordUser
   * @returns
   */

//   async forgotPasswordUser(email) {
//     console.log(email);
//     const res = await axios.put(
//       `${apiUrl}/api/auth/forgotPassword`,
//       { email },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return res;
//   }

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
