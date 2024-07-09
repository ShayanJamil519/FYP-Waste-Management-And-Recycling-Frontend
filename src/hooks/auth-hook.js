import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import AuthService from "../services/auth-service";

const useUserId = () => {
  // return useQuery(["/get-UserId"], () =>
  //   AuthService.getMyId()
  // );
  return useQuery({ queryKey: ["user"], queryFn: () => AuthService.getMyId() });
};



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

const useUpdate = () => {
  console.log("hookkk")
  const mutation = useMutation(({ threadId ,data}) =>
    AuthService.updateRole(threadId , data)
  );

  const addResponsee = async (threadId , data) => {
    try {
      console.log("assaaaa")
      console.log(threadId)
      console.log(data)
      const response = await mutation.mutateAsync({ threadId , data });
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {
    addResponsee,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export {
  useUserSignup,
  useUserLogin,
  useUserId,
  useGetAllUsers,
  useUserForgotPassword,
  useUserResetPassword,
  useUpdate
};
