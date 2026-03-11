function PotholeCard({ pothole }) {

  return (

    <div style={{
      background:"#111827",
      border:"1px solid #1F2937",
      padding:"15px",
      borderRadius:"10px",
      marginBottom:"20px",
      display:"flex",
      gap:"15px"
    }}>

      <img
        src={pothole.imageUrl}
        width="120"
        style={{borderRadius:"8px"}}
        alt="pothole"
      />

      <div>

        <h3 style={{margin:"0"}}>
          Pothole Detected
        </h3>

        <p style={{color:"#9CA3AF"}}>
          📍 {pothole.latitude}, {pothole.longitude}
        </p>

        <p style={{color:"#9CA3AF"}}>
          ⏱ {pothole.timestamp}
        </p>

      </div>

    </div>

  );

}

export default PotholeCard;