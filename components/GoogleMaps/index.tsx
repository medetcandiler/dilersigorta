"use client";
import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, LoadScript } from "@react-google-maps/api";

const libraries: any = ["places", "marker"];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const centerAtalar = { lat: 40.9022023006412, lng: 29.165801756160995 };
const centerAtasehir = { lat: 40.99517015428395, lng: 29.07884296435871 };
const center = { lat: 40.946244002055735, lng: 29.125889660989497 };

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB1QaSJNfpl7AUZo4-f5jHvvIy2l8s9Nvs",
    libraries,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  useEffect(() => {
    let marker1: google.maps.marker.AdvancedMarkerElement | undefined;
    let marker2: google.maps.marker.AdvancedMarkerElement | undefined;

    if (isLoaded && map && google.maps.marker?.AdvancedMarkerElement) {
      // Custom marker icons

      const markerContent1 = document.createElement("div");
      markerContent1.innerHTML = `
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="red"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 4.42 5.02 11.19 6.38 12.97a1 1 0 0 0 1.24 0C13.98 20.19 19 13.42 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
`;

      const markerContent2 = document.createElement("div");
      markerContent2.innerHTML = `
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="blue"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 4.42 5.02 11.19 6.38 12.97a1 1 0 0 0 1.24 0C13.98 20.19 19 13.42 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
`;
      marker1 = new google.maps.marker.AdvancedMarkerElement({
        position: centerAtalar,
        map: map,
        content: markerContent1,
      });

      marker2 = new google.maps.marker.AdvancedMarkerElement({
        position: centerAtasehir,
        map: map,
        content: markerContent2,
      });
    }

    return () => {
      if (marker1) marker1.map = null;
      if (marker2) marker2.map = null;
    };
  }, [isLoaded, map]);

  return isLoaded ? (
    <div className="flex items-center justify-center w-[290px] h-[250px] sm:w-[500px] sm:h-[325px] md:w-[600px] lg:w-[800px] lg:h-[400px] px-5 pt-3">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ mapId: "b0cd4fc262e1f4b3" }}
      />
    </div>
  ) : null;
};

export default GoogleMaps;
