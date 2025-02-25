// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Home from "./sections/Home";
import CharacterCard from './components/CharacterCard';
import DevilFruitGallery from './components/DevilFruitGallery';
import Map from './components/Map';
import ShipModel from './components/ShipModel';
import WantedPosters from './components/WantedPosters';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          {/* Redirect from / to /intro */}
          <Route path="/" element={<Navigate to="/intro" replace />} />
          <Route path="/intro" element={<IntroAnimation key="intro" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/character-card" element={<CharacterCard />} />
          <Route path="/devil-fruit-gallery" element={<DevilFruitGallery />} />
          <Route path="/map" element={<Map />} />
          <Route path="/ship-model" element={<ShipModel />} />
          <Route path="/wanted-posters" element={<WantedPosters />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
