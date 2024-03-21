import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import LandfillEntry from "../services/landfillEntries";
import AuthService from "../services/auth-service";


const useInputEntry = (data) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return LandfillEntry.inputEntry(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("signup");
      },
    }
  );
};

const useNewLandfill = (data) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      //return LandfillEntry.useNewLandfilll(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("signup");
      },
    }
  );
};

const useGetAllLandfills = () => {
  console.log("DAAAAAAAATA222")
  return useQuery(["allLandfills"],
  LandfillEntry.getAllLandfills);
};



export { useNewLandfill, useGetAllLandfills , useInputEntry};
