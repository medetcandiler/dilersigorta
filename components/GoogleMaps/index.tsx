"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const centerAtalar = {
  lat: 40.9022023006412,
  lng: 29.165801756160995,
};

const centerAtasehir = {
  lat: 40.99517015428395,
  lng: 29.07884296435871,
};
const center = {
  lat: 40.946244002055735,
  lng: 29.125889660989497,
};

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBprqEjKG35UgCI7_OAM1WLpb-qltlxG4Y",
  });
  const [map, setMap] = useState(null);
  const onLoad = useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);
  return isLoaded ? (
    <div className="flex items-center justify-center w-[350px] h-[250px] sm:w-[500px] sm:h-[325px] md:w-[600px] lg:w-[800px] lg:h-[400px]  px-5">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={centerAtalar} />
        <Marker position={centerAtasehir} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default GoogleMaps;
