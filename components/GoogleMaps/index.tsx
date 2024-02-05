"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: 40.90301869751824,
  lng: 29.165947591264484,
};

const GoogleMaps = () => {
  return (
    <LoadScript
      googleMapsApiKey={`AIzaSyBprqEjKG35UgCI7_OAM1WLpb-qltlxG4Y&libraries=places`}
    >
      <div className="flex items-center justify-center w-[275px] h-[225px] sm:w-[375px] sm:h-[300px] md:w-[600px] lg:w-[800px] lg:h-[400px]  px-5">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default GoogleMaps;
