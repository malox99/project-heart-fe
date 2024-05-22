import { Icon, LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { ILocation, TCategory } from "../../types/locationSlice.type";

interface IProps {
  height?: string;
  center?: LatLngExpression;
  locations: ILocation[];
}

const MapContainerMain = ({ height, center, locations }: IProps) => {
  const getRightIcon = (category: TCategory) => {
    return new Icon({
      iconUrl: require(`../../assets/icons/${category.toLowerCase()}-icon.png`),
      iconSize: [45, 45],
    });
  };

  return (
    <MapContainer
      style={{ height: height || "100vh" }}
      center={center}
      zoom={13}
      zoomControl={false}
      fadeAnimation
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations?.length > 0 &&
        locations.map((location, idx) => (
          <Marker
          interactive
            key={idx}
            position={location.position}
            icon={location.category.length > 0 ? getRightIcon(location.category[0]) : undefined}
          />
        ))}
    </MapContainer>
  );
};

export default MapContainerMain;
