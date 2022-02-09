import React from "react";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";

import FireLocator from "../Map/FireLocator";

import VolcanoLocator from "../Map/VolcanoLocator";
import Categories from "../Map/Categories";
import SnowLocator from "../Map/SnowLocator";
import StormsLocator from "./StormsLoactor";
import Earthquakes from "./Earthquakes";
import Craters from "./Craters";

const Map = () => {
  return (
    <MapContainer
      center={[50.937531, 6.960279]}
      zoom={5}
      // maxZoom={10}
      // minZoom={1.7}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FireLocator />
      <Categories />
      <VolcanoLocator />
      <SnowLocator />
      <StormsLocator />
      <Earthquakes />
      <Craters />
    </MapContainer>
  );
};

export default Map;
