import { motion } from "framer-motion";

export default function DevilFruitGallery() {
  const fruits = [
    {
      name: "Gomu Gomu no Mi",
      type: "Paramecia",
      image: "/assets/images/gomu-gomu.png",
      description: "Grants the user a rubber body.",
    },
    {
      name: "Mera Mera no Mi",
      type: "Logia",
      image: "/assets/images/mera-mera.png",
      description: "Allows the user to create and control fire.",
    },
    // Add more fruits
  ];

  return (
    <div className="container mt-5">
      <h1 className="pirate-font text-center text-danger mb-5">Devil Fruits</h1>
      <div className="row">
        {fruits.map((fruit, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.1 }}
          >
            <div className="card bg-dark text-warning border-danger">
              <img src={fruit.image} alt={fruit.name} className="card-img-top" />
              <div className="card-body">
                <h3 className="pirate-font">{fruit.name}</h3>
                <p className="text-warning">{fruit.type}</p>
                <p>{fruit.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}