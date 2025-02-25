import { motion } from "framer-motion";

export default function CharacterCard({ name, role, image, description }) {
  return (
    <motion.div
      className="card bg-dark text-warning border-danger m-3"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h3 className="pirate-font">{name}</h3>
        <p className="text-warning">{role}</p>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}