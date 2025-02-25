import { motion } from "framer-motion";
import DevilFruitGallery from "../components/DevilFruitGallery";
export default function Projects() {
  const projects = [
    { title: "Gum-Gum Website", tech: "React + TypeScript" },
    { title: "Devil Fruit API", tech: "Node.js + MongoDB" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="pirate-font text-center text-danger mb-5">My Devil Fruits (Projects)</h1>
      <div className="row">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="col-md-6 mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="card bg-dark text-warning border-danger">
              <div className="card-body">
                <h3 className="pirate-font">{project.title}</h3>
                <p>{project.tech}</p>
                <button className="btn btn-primary">View Treasure</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}