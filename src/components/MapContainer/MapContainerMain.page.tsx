import { Circle, MapContainer, Marker, TileLayer } from "react-leaflet"

const MapContainerMain = () => {
  const fillBlueOptions = { fillColor: 'blue' }
  
  return (
    <MapContainer style={{height: '100vh'}} center={[41.683333, 14.7]} zoom={13} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={[41.69, 14.7]} pathOptions={fillBlueOptions} radius={200} />
      <Marker position={[41.683333, 14.7]}>

      </Marker>
    </MapContainer>
  )
}

export default MapContainerMain
