import React, { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import {
  ILocation,
  ILocationAddress,
  TCategory,
} from "../../../types/locationSlice.type";
import { Icon, LatLngExpression } from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/Store";
import { setSelectedLocation } from "../../../store/reducers/locations/locationsSlice";

export const getRightIcon = (category: TCategory) => {
  return new Icon({
    iconUrl: require(`../../../assets/icons/${category.toLowerCase()}-icon.png`),
    iconSize: [55, 55],
  });
};

const MarkerCustom = ({
  location,
  center,
}: {
  location: ILocation;
  center?: LatLngExpression;
}) => {
  const map = useMap();
  const dispatch = useDispatch<any>();
  const { selectedLocation } = useSelector(
    (store: RootState) => store.locations
  );

  const onMarkerPress = (location: ILocation) => {
    if (
      !selectedLocation ||
      (selectedLocation &&
        selectedLocation?.position.toString() !== location.position.toString())
    ) {
      dispatch(setSelectedLocation(location));
      map.flyTo(location.position, 16);
    } else {
      dispatch(setSelectedLocation(null));
      map.flyTo(center || location.position, 13);
    }
  };

  return (
    <Marker
      interactive
      eventHandlers={{
        click: () => onMarkerPress(location),
      }}
      position={location.position}
      icon={
        location.category.length > 0
          ? getRightIcon(location.category[0])
          : undefined
      }
    />
  );
};

export default MarkerCustom;
