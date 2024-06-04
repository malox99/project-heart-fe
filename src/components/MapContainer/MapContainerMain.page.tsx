import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { ILocationAddress } from "../../types/locationSlice.type";
import MarkerCustom, { getRightIcon } from "./Marker/Marker.component";

interface IProps {
  height?: string;
  center?: LatLngExpression;
  locations: ILocationAddress[];
}

const MapContainerMain = ({ height, center, locations }: IProps) => {

  return (
    <MapContainer
      style={{ height: height || "100vh" }}
      center={center}
      zoom={13}
      fadeAnimation
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        interactive
        position={center as LatLngExpression}
        icon={getRightIcon("USER")}
      />
      {locations?.length > 0 &&
        locations.map(({ location }: ILocationAddress, idx) => (
          <MarkerCustom key={idx} location={location} center={center}/>
        ))}
    </MapContainer>
  );
};

export default MapContainerMain;
