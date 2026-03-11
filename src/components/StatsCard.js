import CountUp from "react-countup";

function StatsCard({ title, value, color }) {

  return (

    <div className="card" style={{
      borderLeft:`5px solid ${color}`,
      width:"220px"
    }}>

      <p style={{
        color:"#9CA3AF",
        fontSize:"14px",
        marginBottom:"10px"
      }}>
        {title}
      </p>

      <h1 style={{
        fontSize:"36px",
        margin:"0"
      }}>
        <CountUp end={value} duration={1.5}/>
      </h1>

    </div>

  );

}

export default StatsCard;