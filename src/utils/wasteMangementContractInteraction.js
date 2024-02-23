import ethers from "ethers";
import smartContract from "../constants/wasteManagementConstants";
import { convertDateToTimestamp } from "./helper";

const provider = new ethers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const WasteManagementContract = new ethers.Contract(
  smartContract.address,
  smartContract.abi,
  signer
);

class WasteManagementContractInteraction {
  static async RecordWasteCollection(date, totalAmount, area, notes) {
    return WasteManagementContract.recordWasteCollection(
      convertDateToTimestamp(date),
      totalAmount,
      area,
      notes
    );
  }

  static async RecordInputOutput(
    inputDate,
    outputDate,
    quantityReceived,
    recyclablePercentage,
    area
  ) {
    return WasteManagementContract.recordInputOutput(
      convertDateToTimestamp(inputDate),
      convertDateToTimestamp(outputDate),
      quantityReceived,
      recyclablePercentage,
      area
    );
  }

  static async RecordLandFillEntry(date, quantityDisposed, area, landfillSite) {
    return WasteManagementContract.recordLandfillEntry(
      convertDateToTimestamp(date),
      quantityDisposed,
      area,
      landfillSite
    );
  }

  static async AssignUserRole(userAddress, role) {
    return WasteManagementContract.assignUserRole(userAddress, role);
  }

  static async UpdateWasteCollectionEntry(id, totalAmount, notes) {
    return WasteManagementContract.updateWasteCollectionEntry(
      id,
      totalAmount,
      notes
    );
  }

  static async GetWasteCollectionEntry(id) {
    return WasteManagementContract.getWasteCollectionEntry(id);
  }

  static async GetDistrictAdminReport(id) {
    return WasteManagementContract.getDistrictAdminReport(id);
  }

  static async GetRecyclablePointAdminReport(id) {
    return WasteManagementContract.getRecyclablePointAdminReport(id);
  }

  static async GetLandfillAdminReport(id) {
    return WasteManagementContract.getLandfillAdminReport(id);
  }
}

export default WasteManagementContractInteraction;
