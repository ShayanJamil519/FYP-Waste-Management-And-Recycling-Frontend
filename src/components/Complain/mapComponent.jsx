"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const handleConfirmLocation = () => {
    if (selectedLocation) {
      console.log("LOCATION")
      console.log(selectedLocation.lat)
      console.log(selectedLocation.lng)
      localStorage.setItem("latitude", selectedLocation.lat);
      localStorage.setItem("longitude", selectedLocation.lng);
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCLNX0Qokx5Fu3s8kqN1NAp3tABdIr8xzE">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={{ lat: 24.860966, lng: 66.990501 }}
        onClick={handleMapClick}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>
      <button onClick={handleConfirmLocation}>Confirm Location</button>
    </LoadScript>
  );
};

export default MapComponent;
