import useRealtimePotholes from "../hooks/useRealtimePotholes";
import PotholeCard from "../components/PotholeCard";

function FeedPage(){

  const potholes = useRealtimePotholes();

  return(

    <div style={{
      background:"#0B1120",
      minHeight:"100vh",
      padding:"30px",
      color:"white"
    }}>

      <h1>Live Detection Feed</h1>

      <p style={{color:"#9CA3AF"}}>
        Real-time pothole detection timeline
      </p>

      <div style={{marginTop:"30px"}}>

        {potholes.map(p => (

          <PotholeCard
            key={p.id}
            pothole={p}
          />

        ))}

      </div>

    </div>

  )

}

export default FeedPage;