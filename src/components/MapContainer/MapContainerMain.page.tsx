import { Icon, LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { ILocationAddress, TCategory } from "../../types/locationSlice.type";

interface IProps {
  height?: string;
  center?: LatLngExpression;
  locations: ILocationAddress[];
}

const MapContainerMain = ({ height, center, locations }: IProps) => {
  const getRightIcon = (category: TCategory) => {
    return new Icon({
      iconUrl: require(`../../assets/icons/${category.toLowerCase()}-icon.png`),
      iconSize: [55, 55],
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
      <Marker
        interactive
        position={center as LatLngExpression}
        icon={getRightIcon("USER")}
      />
      {locations?.length > 0 &&
        locations.map(({ location }: ILocationAddress, idx) => (
          <Marker
            interactive
            key={idx}
            position={location.position}
            icon={
              location.category.length > 0
                ? getRightIcon(location.category[0])
                : undefined
            }
          />
        ))}
    </MapContainer>
  );
};

export default MapContainerMain;
