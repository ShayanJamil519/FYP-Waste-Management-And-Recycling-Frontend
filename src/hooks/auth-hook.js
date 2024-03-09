import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import AuthService from "../services/auth-service";

const useUserId = () => {
  // return useQuery(["/get-UserId"], () =>
  //   AuthService.getMyId()
  // );
  return useQuery({ queryKey: ["user"], queryFn: () => AuthService.getMyId() });
};

// const useUserId = () => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     () => {
//       return AuthService.getMyId();
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("userId");
//       },
//     }
//   );
// };

const useUserSignup = (userData) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return AuthService.signUpUser(userData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("signup");
      },
    }
  );
};

const useUserLogin = (userData) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return AuthService.LoginUser(userData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("login");
      },
    }
  );
};

// const useUserForgotPassword = (email) => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     () => {
//       return AuthService.forgotPasswordUser(email);
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("forgotPassword");
//       },
//     }
//   );
// };

// const useUserResetPassword = (userData, token) => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     () => {
//       return AuthService.resetPasswordUser(userData, token);
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("resetPassword");
//       },
//     }
//   );
// };

// const useContactUs = (data) => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     () => {
//       return AuthService.contactUs(data);
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("contact");
//       },
//     }
//   );
// };

export {
  useUserSignup,
  useUserLogin,
  useUserId,
  // useUserForgotPassword,
  // useUserResetPassword,
  // useContactUs,
};
