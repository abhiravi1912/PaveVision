import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import MapPage from "./pages/MapPage";
import FeedPage from "./pages/FeedPage";
import GalleryPage from "./pages/GalleryPage";

import Navbar from "./components/Navbar";

function App() {

  return (

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/map" element={<MapPage />} />

        <Route path="/feed" element={<FeedPage />} />

        <Route path="/gallery" element={<GalleryPage />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;