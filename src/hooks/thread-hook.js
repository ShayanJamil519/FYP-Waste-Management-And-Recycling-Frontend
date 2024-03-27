import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import RecyclingEntry from "../services/recyclePointEntries";
import ThreadEntry from "../services/thread-service";
const useCreateThread = (data) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return ThreadEntry.createThread(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("signup");
      },
    }
  );
};

const useNewRecyclingPoint = (data) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return RecyclingEntry.newRecyclingPoint(data);
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

const useGetAllRecyclingPoints = () => {
  console.log("DAAAAAAAATA222")
  return useQuery(["allRecyclingPoints"],
  RecyclingEntry.getAllRecyclingPoints);
};

export {
  useCreateThread,
  useOutputEntry,
  useNewRecyclingPoint,
  useGetAllRecyclingPoints,
};
