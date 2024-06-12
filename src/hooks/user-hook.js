// controllers/recyclingController.js
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import UserService from '../services/user-service'; // Adjust the path as needed



const useGetAllRecyclingPoints = () => {
    return useQuery(["/recycling/get-all-recycling-points"], () =>
      UserService.getAllRecyclingPoints()
    );
  };

  const useGetAllLandfillPoints = () => {
    return useQuery(["/landfill/get-all-landfill-points"], () =>
      UserService.getAllLandfillPoints()
    );
  };

export  {
  useGetAllRecyclingPoints,
  useGetAllLandfillPoints,
};
