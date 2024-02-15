import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import RecyclingEntry from "../services/recyclePointEntries";
import AuthService from "../services/auth-service";
const useInputEntry = (data) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return RecyclingEntry.inputEntry(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("signup");
      },
    }
  );
};


const useOutputEntry = (data) => {
    const queryClient = useQueryClient();
    return useMutation(
      () => {
        return RecyclingEntry.outputEntry(data);
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("signup");
        },
      }
    );
  };

export { useInputEntry, useOutputEntry };
