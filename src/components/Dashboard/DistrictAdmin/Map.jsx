"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const MapComponent = ({ latitude, longitude }) => {
  const center = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };

  const zoom = 15; // Adjust the zoom level as needed

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <LoadScript googleMapsApiKey="AIzaSyCLNX0Qokx5Fu3s8kqN1NAp3tABdIr8xzE">
        <GoogleMap
          id="map"
          mapContainerStyle={{
            height: "100%",
            width: "100%",
          }}
          zoom={zoom}
          center={center}
        >
          {/* Marker */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
