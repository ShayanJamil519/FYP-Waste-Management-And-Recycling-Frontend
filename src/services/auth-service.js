import axios from "axios";
import apiUrl from "../utils/baseURL";
import Cookies from 'js-cookie';
const token = Cookies.get('jwt');

class AuthService {
  async getMyId() {
    
    const res = await axios.get(
      `${apiUrl}/get-UserId`,

      {
        headers: {
          Authorization:token,
          "Content-Type": "application/json",

        },
      }
    );
    console.log("authhOOK")
    const userId = res.data.userId
    console.log(userId)
    return userId;
  }
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
    const res = await axios.post(`${apiUrl}/Login-district`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { token } = res.data;
    Cookies.set('jwt', token, { expires: 3 });
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
