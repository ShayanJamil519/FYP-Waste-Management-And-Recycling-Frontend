import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import ComplainService from "../services/complain-service";

const useComplain = (userData) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return ComplainService.complain(userData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("signup");
      },
    }
  );
};



export {
  useComplain,
};
