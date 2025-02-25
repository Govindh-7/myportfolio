import { motion } from "framer-motion";

export default function Map() {
  return (
    <div className="map-container">
      <svg viewBox="0 0 800 600" className="world-map">
        {/* Example: Marineford */}
        <motion.circle
          cx="200"
          cy="300"
          r="20"
          fill="var(--one-piece-red)"
          whileHover={{ scale: 1.2 }}
          onClick={() => alert("Welcome to Marineford!")}
        />
        {/* Example: Grand Line */}
        <motion.path
          d="M100,100 L200,200"
          stroke="var(--one-piece-gold)"
          strokeWidth="2"
          whileHover={{ strokeWidth: 4 }}
        />
      </svg>
    </div>
  );
}