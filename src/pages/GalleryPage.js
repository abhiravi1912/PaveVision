import useRealtimePotholes from "../hooks/useRealtimePotholes";

function GalleryPage() {

  const potholes = useRealtimePotholes();

  return (

    <div style={{padding:"20px"}}>

      <h1>Pothole Gallery</h1>

      <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>

        {potholes.map(p => (

          <img
            key={p.id}
            src={p.imageUrl}
            width="250"
            alt="pothole"
          />

        ))}

      </div>

    </div>

  );

}

export default GalleryPage;