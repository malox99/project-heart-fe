import { latLngBounds, LatLngExpression } from "leaflet";
import { useMap } from "react-leaflet";
import { ILocationAddress } from "../../../types/locationSlice.type";

const BounceMap = ({
  center,
  locations,
}: {
  center: LatLngExpression;
  locations: ILocationAddress[];
}) => {
  const map = useMap();

  let markerBounds = latLngBounds([]);

  if (locations.length && locations.length > 0) {
    locations.forEach((marker: any) => {
      markerBounds.extend([
        marker.location.position[0],
        marker.location.position[1],
      ]);
    });
  }

  markerBounds.isValid() && map.fitBounds(markerBounds);
  
  return <></>;
};

export default BounceMap;
