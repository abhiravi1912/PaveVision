import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav style={styles.nav}>

      <h2 style={styles.logo}>PaveVision</h2>

      <div style={styles.links}>

        <Link
  style={styles.link}
  to="/"
  onMouseOver={(e)=>e.target.style.color="#F9FAFB"}
  onMouseOut={(e)=>e.target.style.color="#fafbfc"}
>
  Dashboard
</Link>

        <Link
  style={styles.link}
  to="/map"
  onMouseOver={(e)=>e.target.style.color="#F9FAFB"}
  onMouseOut={(e)=>e.target.style.color="#f6f8fa"}
>
  Live Map
</Link>

        <Link
  style={styles.link}
  to="/feed"
  onMouseOver={(e)=>e.target.style.color="#F9FAFB"}
  onMouseOut={(e)=>e.target.style.color="#fbfcfe"}
>
  Feed
</Link>

        <Link
  style={styles.link}
  to="/gallery"
  onMouseOver={(e)=>e.target.style.color="#F9FAFB"}
  onMouseOut={(e)=>e.target.style.color="#eff1f5"}
>
  Gallery
</Link>

      </div>

    </nav>

  );

}

const styles = {

 nav: {
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  padding:"15px 30px",
  background:"#111827",
  borderBottom:"1px solid #1F2937"
},

 logo:{
  color:"#FF4B4B",
  fontWeight:"bold"
},

  links: {
    display: "flex",
    gap: "20px"
  },

link:{
  color:"#fbfcfd",
  textDecoration:"none",
  fontWeight:"700",
  fontSize:"16px",
  transition:"0.2s",
},



};

export default Navbar;