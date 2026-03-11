import useRealtimePotholes from "../hooks/useRealtimePotholes";
import StatsCard from "../components/StatsCard";
import MapView from "../components/MapView";

function Dashboard() {

  const potholes = useRealtimePotholes();

  const todayCount = potholes.length;
  
  return (

    <div style={{
      background:"#0B1120",
      minHeight:"100vh",
      padding:"30px",
      color:"white"
    }}>

      <h1 style={{marginBottom:"30px"}}>
        Mission Control Dashboard
      </h1>

      {/* Stats Section */}

      <div style={{
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit, minmax(220px,1fr))",
  gap:"20px",
  marginBottom:"40px"
}}>

        <StatsCard
          title="Total Potholes"
          value={potholes.length}
          color="#FF4B4B"
        />

        <StatsCard
          title="Today's Detections"
          value={todayCount}
          color="#10B981"
        />

        <StatsCard
          title="System Status"
          value="Online"
          color="#3B82F6"
        />

      </div>


      {/* Map Preview */}

      <h2 style={{marginBottom:"10px"}}>Live Map Preview</h2>

      <div style={{
        height:"400px",
        borderRadius:"10px",
        overflow:"hidden"
      }}>
        <MapView/>
      </div>


      {/* Recent Detections */}

      <h2 style={{marginTop:"40px"}}>Recent Detections</h2>

      <div style={{
        display:"flex",
        gap:"20px",
        marginTop:"10px"
      }}>

        {potholes.slice(0,3).map(p => (

          <div key={p.id} style={{
            background:"#111827",
            padding:"10px",
            borderRadius:"8px"
          }}>

            <img
              src={p.imageUrl}
              width="200"
              alt="pothole"
            />

            <p>{p.latitude}, {p.longitude}</p>

            <p>{p.timestamp}</p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Dashboard;