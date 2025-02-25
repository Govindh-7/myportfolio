import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand pirate-font" to="/home">
          Pirate Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <motion.ul
            className="navbar-nav ms-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 2, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/character-card">Character Card</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/devil-fruit-gallery">Devil Fruit Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/map">Map</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ship-model">Ship Model</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wanted-posters">Wanted Posters</Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
}