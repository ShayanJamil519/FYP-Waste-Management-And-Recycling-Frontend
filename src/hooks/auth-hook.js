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

const useUserForgotPassword = (userData) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return AuthService.ForgotPassword(userData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("forgotPassword");
      },
    }
  );
};

const useUserResetPassword = (userData) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return AuthService.ResetPassword(userData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("resetPassword");
      },
    }
  );
};

const useGetAllUsers = () => {
  console.log("DAAAAAAAATA222");
  return useQuery(["allUsers"], AuthService.getAllUsers);
};

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
  useGetAllUsers,
  useUserForgotPassword,
  useUserResetPassword,
  // useUserForgotPassword,
  // useUserResetPassword,
  // useContactUs,
};
