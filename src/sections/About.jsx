import CharacterCard from "../components/CharacterCard";

import WantedPoster from "../components/WantedPosters";

export default function About() {
  const crew = [
    {
      name: "Monkey D. Luffy",
      bounty: "1,500,000,000",
      image: "/assets/images/luffy.png",
      description: "Captain of the Straw Hat Pirates. Aims to become the King of the Pirates!",
    },
    {
      name: "Roronoa Zoro",
      bounty: "320,000,000",
      image: "/assets/images/zoro.png",
      description: "Swordsman of the Straw Hat Pirates. Aims to become the world's greatest swordsman!",
    },
    // Add more crew members
  ];

  return (
    <div className="container mt-5">
      <h1 className="pirate-font text-center text-danger mb-5">The Crew</h1>
      <div className="row">
        {crew.map((member, index) => (
          <WantedPoster key={index} {...member} />
        ))}
      </div>
    </div>
  );
}