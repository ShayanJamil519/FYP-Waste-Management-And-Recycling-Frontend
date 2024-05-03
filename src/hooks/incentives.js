import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Incentives from "../services/incentives";
import AuthService from "../services/auth-service";

const useGetSubdivisionsAndUserCounts = (district) => {
    console.log("Incentives")
    return useQuery(["get-subDivision/district", district], () =>
    Incentives.getSubdivisionsAndUserCounts(district)
  );
};

const useGetSubdivisionComplaints = (district) => {
    console.log("Incentives")
    return useQuery(["/get-subDivision-complaints/district", district], () =>
    Incentives.getSubdivisionComplaints(district)
  );
};

// const useGetPredictData = (requestData) => {
//   console.log("Incentives")
//     return useQuery(["/predict", requestData], () =>
//     Incentives.getPredictData(requestData)
// );
// };

const useGetPredictData = (requestData) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return Incentives.getPredictData(requestData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("signup");
      },
    }
  );
};


  export {useGetSubdivisionsAndUserCounts, useGetSubdivisionComplaints, useGetPredictData};
