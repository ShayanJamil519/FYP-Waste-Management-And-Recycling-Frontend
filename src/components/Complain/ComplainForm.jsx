"use client";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import { useComplain } from "../../hooks/complain-hook";
import Input from "../CC/Input";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useStateContext } from "@/app/StateContext";
import { FaUpload } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FaSpinner } from "react-icons/fa";
import "@tensorflow/tfjs-backend-cpu";
import * as tf from "@tensorflow/tfjs-core";

import * as tflite from "@tensorflow/tfjs-tflite";
import "./complain.css";

const MAX_DETECTIONS = 5;
const THRESHOLD = 0.4;
const MODEL_PATH = "/model/waste.tflite";
const classLabels = {
  0: "Open Litter",
  1: "Overflow Dustbin",
  2: "Plastic Waste",
  3: "Biodegradable Waste",
  4: "Medical Waste",
};

const classColors = {
  "Open Litter": "#F44336",
  "Overflow Dustbin": "#388E3C",
  "Plastic Waste": "#2979FF",
  "Biodegradable Waste": "#E040FB",
  "Medical Waste": "#FF6D00",
};

/*const BoundingBox = ({ left, top, width, height, className, score, color }) => (
  <div className="box-container" style={{ position: 'absolute', left: left + 'px', top: top + 'px' }}>
    <div className="box" style={{ borderColor: color, borderWidth: '4px', width: width + 'px', height: height + 'px' }}></div>
    <div className="label" style={{ backgroundColor: color }}>{`${className} (${score.toFixed(2)})`}</div>
  </div>
);

const drawBoundingBoxes = (left, top, width, height, className, score, color) => {
  const boundingBox = <BoundingBox key={`${left}-${top}-${width}-${height}`} left={left} top={top} width={width} height={height} className={className} score={score} color={color} />;
  const container = document.createElement("div");
  const root = createRoot(container);
  root.render(boundingBox);
  return container.firstChild;
};*/

/*const drawBoundingBoxes = (left, top, width, height, className, score, color) => (
  <BoundingBox key={`${left}-${top}-${width}-${height}`} left={left} top={top} width={width} height={height} className={className} score={score} color={color} />
);*/

// =============

// function drawBoundingBoxes(left, top, width, height, className, score, color) {
//   const container = document.createElement("div");
//   container.classList.add("box-container");

//   const box = document.createElement("div");
//   box.classList.add("box");
//   box.style.borderColor = color;
//   box.style.borderWidth = "4px";
//   container.appendChild(box);

//   const label = document.createElement("div");
//   label.classList.add("label");
//   label.style.backgroundColor = color;
//   label.textContent = `${className} (${score.toFixed(2)})`;
//   container.appendChild(label);

//   // Adjust the position based on the centered image.
//   const imgElement = document.getElementById("my-3");
//   const imgRect = imgElement.getBoundingClientRect();
//   const offsetX = imgRect.left;

//   container.style.left = `${left + offsetX - 1}px`;
//   container.style.top = `${top - 10}px`;
//   box.style.width = `${width + 1}px`;
//   box.style.height = `${height + 1}px`;

//   return container;
// }

function drawBoundingBoxes(left, top, width, height, className, score, color) {
  // Container for both the box and the label
  const container = document.createElement("div");
  container.classList.add("box-container");

  // The bounding box itself
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.borderColor = color; // Color passed as a parameter
  box.style.borderWidth = "4px";
  // box.style.width = `${width}px`;
  // box.style.height = `${height}px`;
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  container.appendChild(box);

  // Label for the bounding box
  const label = document.createElement("div");
  label.classList.add("label");
  label.style.backgroundColor = color; // Color passed as a parameter
  label.textContent = `${className} (${score.toFixed(2)})`; // Text with the class name and score
  container.appendChild(label);

  // Adjust the position based on the image position
  box.style.left = `${left}px`;
  box.style.top = `${top}px`;

  // Append the container to the DOM
  const imageContainer = document.getElementById("image-container"); // The ID of the element that holds the image
  imageContainer.appendChild(container);
}

const ComplainForm = () => {
  tflite.setWasmPath("tflite_wasm/");
  const router = useRouter();

  const [detectionDimension, setDetectionDimension] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { user } = useStateContext();
  const [latitude, setLatitude] = useState(null);
  const districtOptions = ["District 1", "District 2", "District 3"];
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const savedLatitude = localStorage.getItem("latitude");
    setLatitude(savedLatitude);
    const savedLongitude = localStorage.getItem("longitude");
    setLongitude(savedLongitude);
  }, []);

  const [userData, setUserData] = useState({
    userId: user?.userId,
    district: "",
    area: "",
    description: "",
    latitude: parseFloat(localStorage.getItem("latitude")),
    longitude: parseFloat(localStorage.getItem("longitude")),
    image: "",
  });

  const { mutate: addMutate } = useComplain(JSON.stringify(userData));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    console.log("image here");
    console.log(image);

    //const processedImage = tf.cast(tf.expandDims(resizedImage), 'int32');
    event.preventDefault();
    setIsLoading(true);
    addMutate(
      {},
      {
        onSuccess: (response) => {
          toast.success(response?.data?.message);
          router.push("/");
          setIsLoading(false);
        },
        onError: (response) => {
          console.error("An error occurred bro:");
          console.log(response);
          toast.error(response.message);
          setIsLoading(false);
        },
      }
    );
  };

  const handleAvatarChange = (event) => {
    console.log("handleImage");
    const { name, value } = event.target;
    if (name === "image") {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.onload = async () => {
          try {
            const parentElement = document.getElementById("image-container");
            console.log(parentElement);
            const boxContainer1 = document.createElement("div");
            parentElement.style.position = "relative";
            boxContainer1.classList.add("box-container");
            /*boxContainer1.style.top = '0';
            boxContainer1.style.left = '0';
            boxContainer1.style.height = '100%';
            boxContainer1.style.width = '100%';
            boxContainer1.style.position = 'absolute';*/

            // parentElement.appendChild(img.cloneNode());
            // parentElement.appendChild(boxContainer1);

            let predictionImage =
              document.getElementsByClassName("image-prediction")[0];
             console.log({predictionImage})
            //predictionImage.style.height = "450px";
           // predictionImage.style.width = "450px";

            //img.style.height = "400px"; // Set the height to 300 pixels
            //img.style.width = "400px";

            //parentElement.appendChild(img);
            const tensor = tf.browser.fromPixels(img);
            const resizedImage = tf.image.resizeBilinear(tensor, [448, 448]);
            const objectDetector = await tflite.loadTFLiteModel(MODEL_PATH);
            const input = tf.cast(tf.expandDims(resizedImage), "int32");

            // Get the output tensors.
            //img.height="400px"
            //img.width="400px"
            let result = await objectDetector.predict(input);
            let boxes = Array.from(await result[Object.keys(result)[0]].data());

            console.log("boxes");
            console.log(boxes);
            let classes = Array.from(
              await result[Object.keys(result)[1]].data()
            );
            let scores = Array.from(
              await result[Object.keys(result)[2]].data()
            );
            let n = Array.from(await result[Object.keys(result)[3]].data());
            console.log(result);
            //console.log("classes");
            //console.log(classes);
            const detections = [];

            for (let i = 0; i < n; i++) {
              const boundingBox = boxes.slice(i * 4, (i + 1) * 4);
              const classIndex = classes[i];
              const className = classLabels[classIndex];
              const score = scores[i];
              detections.push({ boundingBox, className, score, index: i });
            }
            console.log("detections");
            console.log(detections);
            // Sort the results in the order of confidence to get top results.
            detections.sort((a, b) => b.score - a.score);

            const numDetectionsToShow = Math.min(
              MAX_DETECTIONS,
              detections.length
            );
            console.log("client");
            console.log(img.clientHeight);
            console.log(img.clientWidth);
            console.log("client and width");
            console.log(img.height);
            console.log(img.width);
            for (let i = 0; i < numDetectionsToShow; i++) {
              const detection = detections[i];
              const { boundingBox, className, score, index } = detection;
              const y_min = Math.floor(boundingBox[0] * 450);
              const y_max = Math.floor(boundingBox[2] * 450);
              const x_min = Math.floor(boundingBox[1] * 450);
              const x_max = Math.floor(boundingBox[3] * 450);

              //const container = img.parentNode;
              if (score > THRESHOLD) {
                const color = classColors[className];
                console.log({
                  x_max,
                  x_min,
                  y_max,
                  y_min,
                  score,
                  color,
                  className,
                });

                setDetectionDimension({
                  y_min,
                  x_min,
                  predictionValue: score,
                  predictionName: className,
                  width: x_max - x_min,
                  height: y_max - y_min,
                });

                // const boxContainer = drawBoundingBoxes(
                //   x_min,
                //   y_min,
                //   x_max - x_min,
                //   y_max - y_min,
                //   className,
                //   score,
                //   color
                // );

                //img.parentNode.appendChild(boxContainer);
                // boxContainer1.appendChild(boxContainer);
                // console.log(boxContainer);
              }
            }
          } catch (error) {
            console.error("Error while processing image:", error);
          }
        };
        img.src = reader.result;
        setUserData({ ...userData, [name]: reader.result });
        setImage(reader.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const removeAvatar = () => {
    setImage(null);
    // Update userData state if necessary
  };

  return (
    <div
      style={{
        boxShadow: "0px 5px 43px 0px rgba(17, 29, 25, 0.12)",
      }}
      className=" p-10 font-poppins"
    >
      <h1 className="font-bold text-2xl">Make a request</h1>
      <p className="text-sm mt-3 leading-6 text-[#62706b]">
        Please complete the form below, to request a quote, and we’ll be in
        touch. Or you can call us and our specialists will provide help!
      </p>
      <form className="w-full mt-10 " onSubmit={handleSubmit}>
        <div id="image-container" className="relative">
          <div id="my-3">
            {image ? (
              // <div className="">
              //   <div className="w-24 h-24 mx-auto relative"></div>
              // </div>

              <div id="image-container-prediction" className="relative w-full">
                <div
                  style={{
                    top: `${detectionDimension.y_min}px`,
                    left: `${detectionDimension.x_min}px`,
                    width: `${detectionDimension.width}px`,
                    height: `${detectionDimension.height}px`,
                  }}
                  className={`prediction_box absolute border-4 border-red-600`}
                >
                  <p className="absolute top-0 left-0 text-red-600 text-lg">
                    {`${detectionDimension.predictionName} + ${detectionDimension.predictionValue}`}
                  </p>
                </div>

                <img
                  src={image}
                  alt="image/logo"
                  className="image-prediction"
                  
                  
                />
              </div>
            ) : (
              <label htmlFor="avatar-upload" className="cursor-pointer">
                <div className="w-full h-32 bg-gray-200 rounded-md flex flex-col items-center  justify-center text-gray-700">
                  <FaUpload className="text-2xl" />
                  <p>Upload your image</p>
                  <p className="text-xs mt-2">
                    Click to browse your image here
                  </p>
                </div>
              </label>
            )}
            <input
              id="avatar-upload"
              required
              name="image"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input
            name="userId"
            label="Enter Your ID"
            type="text"
            value={userData.userId}
            placeholder="Please write you details"
            onChange={handleInputChange}
          />
          {/* <Input
            name="district"
            label="Enter Your Destrict"
            type="text"
            value={userData.district}
            placeholder="Please write you details"
            onChange={handleInputChange}
          /> */}
          <div>
            <label
              htmlFor="district-select"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select Your District
            </label>
            <select
              id="district-select"
              name="district"
              required
              value={userData.district}
              onChange={handleSelectChange}
              className="outline-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
            >
              <option value="">Select District</option>
              {districtOptions.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <Input
            name="area"
            label="Enter Your Area"
            type="text"
            value={userData.area}
            placeholder="Please write you details"
            onChange={handleInputChange}
          />
          <Input
            name="description"
            onChange={handleInputChange}
            value={userData.description}
            placeholder="Enter your text here..."
            label="Your Query"
          />
        </div>
        <div className="grid place-items-center mt-6">
          {isLoading ? (
            <FaSpinner className="animate-spin" /> // Show spinner if isLoading is true
          ) : (
            <button
              // onClick={resetForm}
              type="submit"
              className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm"
            >
              Submit Complain
              <span className="p-0 rounded-full bg-[#fff]  transition duration-500 text-[#20332c] ">
                <IoIosArrowRoundForward className="text-[27px] font-bold" />
              </span>{" "}
              <style jsx>{`
                button:hover span {
                  background-color: #fff;
                  color: #257830;
                }
              `}</style>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ComplainForm;
