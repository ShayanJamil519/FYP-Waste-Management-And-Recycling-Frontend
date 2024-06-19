"use client";
import html2canvas from "html2canvas";
import { uploadFileToIPFS } from "@/utils/uploadFileToIPFS";
import { toast } from "react-toastify";
import WasteManagementContractInteraction from "@/utils/wasteMangementContractInteraction";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

const UploadReportButton = ({ tableRef, reportType }) => {
  const [loading, setLoading] = useState(false);

  const handleCaptureAndUpload = async () => {
    setLoading(true);
    if (tableRef.current) {
      try {
        const canvas = await html2canvas(tableRef.current, {
          // Options for html2canvas
          scale: window.devicePixelRatio, // Adjusts for device pixel ratio
          useCORS: true, // Tries to use CORS-compliant images
          logging: true, // Enables logging for debugging
          // other options as needed...
        });
        canvas.toBlob(async (blob) => {
          // Upload captured image as blob
          const response = await uploadFileToIPFS(blob);

          try {
            await WasteManagementContractInteraction.AddWeeklyReport(
              new Date(),
              response?.data?.IpfsHash,
              reportType
            );

            toast.success("Report Uploaded to IPFS");
            setLoading(false);
          } catch (error) {
            console.log(error)
            toast.error(error?.message);
          } finally {
            setLoading(false);
          }
        });
      } catch (error) {
        toast.error(error);
        setLoading(false);
      }
    }
  };

  return (
    <button
      onClick={handleCaptureAndUpload}
      disabled={loading}
      className={` ${
        loading && "opacity-70"
      } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
    >
      {loading ? (
        <FaSpinner className="animate-spin  text-white" />
      ) : (
        "Upload Report"
      )}
    </button>
  );
};

export default UploadReportButton;
