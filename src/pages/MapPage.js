import MapView from "../components/MapView";

function MapPage(){

  return(

    <div style={{
      padding:"30px",
      background:"#0B1120",
      minHeight:"100vh",
      color:"white"
    }}>

      <h1>Live Pothole Monitoring Map</h1>

      <p style={{color:"#9CA3AF"}}>
        Real-time pothole detections from the AI system
      </p>

      <MapView/>

    </div>

  )

}

export default MapPage;