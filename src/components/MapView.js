import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useRealtimePotholes from "../hooks/useRealtimePotholes";
import L from "leaflet";

const potholeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

function MapView() {

  const potholes = useRealtimePotholes();

  return (

    <MapContainer
      center={[13.0827, 80.2707]}
      zoom={13}
      style={{ height: "600px", width: "100%" }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {potholes.map((p) => (

        <Marker
          key={p.id}
          position={[p.latitude, p.longitude]}
          icon={potholeIcon}
        >

          <Popup>

            <div style={{textAlign:"center"}}>

              <img
                src={p.imageUrl}
                width="220"
                style={{borderRadius:"8px"}}
                alt="pothole"
              />

              <p><b>Latitude:</b> {p.latitude}</p>

              <p><b>Longitude:</b> {p.longitude}</p>

              <p><b>Time:</b> {p.timestamp}</p>

            </div>

          </Popup>

        </Marker>

      ))}

    </MapContainer>

  );
}

export default MapView;