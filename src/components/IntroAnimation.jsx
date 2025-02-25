import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/Images/logo.png";
import hakiAura from "../assets/Effects/hakiAura.gif";

import bgMusic from "../assets/Sounds/onePieceTheme.mp3";
import "../styles/IntroAnimation.css";

export default function IntroAnimation() {
  const [audio] = useState(new Audio(bgMusic));
  const [isPlaying, setIsPlaying] = useState(
    localStorage.getItem("isPlaying") === "true"
  );

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.3;

    const playAudio = async () => {
      try {
        if (isPlaying) {
          await audio.play();
        }
      } catch (err) {
        console.log("Autoplay blocked! Waiting for user interaction.");
      }
    };

    playAudio();

    return () => {
      audio.pause();
    };
  }, [isPlaying, audio]);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
    localStorage.setItem("isPlaying", !isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="intro-overlay"
    >
    <video controls autoPlay loop className="oceanwave">
  <source 
    src="https://drive.google.com/uc?export=download&id=1TX5p8Sl_FjSRjiQdb9ellLo3TEdm6JJU" 
    type="video/mp4" 
  />
  Your browser does not support the video tag.
</video>

<video autoPlay loop muted className="lightening">
  <source 
    src="https://drive.google.com/uc?export=download&id=1QiKZ84ithF86elvqHzvZulclcdocplfZ" 
    type="video/mp4" 
  />
  Your browser does not support the video tag.
</video>


      <img src={hakiAura} alt="Haki Aura" className="haki-aura" />
      <motion.img
        src={logo}
        alt="Straw Hat Logo"
        className="logo-animation"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* 🏴‍☠️ One Piece Style Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="typewriter-text"
      >
        The King of the Pirates Portfolio!
      </motion.h1>

      {/* Additional text appearing one by one with delay */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 4 }}
        className="subtext"
      >
        Every great pirate has a journey... and this is mine.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 5 }}
        className="subtext"
      >
        Skills forged through challenges, like Devil Fruits bestowing power.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 7 }}
        className="subtext"
      >
        Adventures mapped like a treasure hunt, leading to greater horizons.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 9 }}
        className="subtext"
      >
        Welcome to my world, where the Grand Line of coding begins!
      </motion.p>

      {/* 🎵 Play/Stop Music Button */}
      <button className="music-btn" onClick={toggleAudio}>
        {isPlaying ? "⏸ Stop Music" : "▶ Play Music"}
      </button>
    </motion.div>
  );
}
