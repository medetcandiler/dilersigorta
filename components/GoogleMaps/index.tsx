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
      googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_APIKEY}&libraries=places`}
    >
      <div className="flex items-center justify-center size-96 bg-red-300 md:w-[800px]  md:h-[400px]">

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
