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


const useAddResponseToComplaint = () => {
  const mutation = useMutation(({ complaintId, data }) => ComplainService.addResponseToComplaint(complaintId, data));

  const addResponse = async (complaintId, data) => {
    try {
      const response = await mutation.mutateAsync({ complaintId, data });
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {
    addResponse,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};


const useGetComplaintsInDistrict = (district) => {
  console.log(district)
  console.log("hook")
  return useQuery(
    // {
    // queryKey: ["complaints", district],
    // queryFn: () => ComplainService.getComplaintsInDistrict(district)
    ["complaintsTable", district],
    () => ComplainService.getComplaintsInDistrict(district)
  // }
  );

};

export {
  useComplain,
  useAddResponseToComplaint,
  useGetComplaintsInDistrict,
};
