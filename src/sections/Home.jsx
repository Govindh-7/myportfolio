// Home.jsx
import { motion } from "framer-motion";
import useSound from "use-sound";
import { useState } from "react";
import ShipModel from "../components/ShipModel";
import luffyLaugh from "../assets/sounds/luffyLaugh.mp3";
import zoroSword from "../assets/sounds/zoroSword.mp3";
import namiMoney from "../assets/sounds/namiMoney.mp3";
import denDenMushi from "../assets/sounds/denDenMushi.mp3";

export default function Home() {
  const [volume, setVolume] = useState(0.5);

  // Track the playing state for each sound
  const [isPlayingLaugh, setIsPlayingLaugh] = useState(false);
  const [isPlayingSword, setIsPlayingSword] = useState(false);
  const [isPlayingMoney, setIsPlayingMoney] = useState(false);
  const [isPlayingDenDenMushi, setIsPlayingDenDenMushi] = useState(false);

  // Load sounds with volume control
  const [playLaugh, { stop: stopLaugh }] = useSound(luffyLaugh, { volume });
  const [playSword, { stop: stopSword }] = useSound(zoroSword, { volume });
  const [playMoney, { stop: stopMoney }] = useSound(namiMoney, { volume });
  const [playDenDenMushi, { stop: stopDenDenMushi }] = useSound(denDenMushi, {
    volume,
  });

  // Toggle sound function
  const toggleSound = (isPlaying, setIsPlaying, playSound, stopSound) => {
    if (isPlaying) {
      stopSound();
    } else {
      playSound();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container mt-5">
      <h1 className="pirate-font text-center text-danger">
        Welcome to My One Piece Portfolio!
      </h1>
      <p className="text-center text-warning">
        Set sail and explore my projects and adventures!
      </p>

      {/* Sound Buttons */}
      <div className="text-center mt-4">
        <motion.button
          onClick={() =>
            toggleSound(isPlayingLaugh, setIsPlayingLaugh, playLaugh, stopLaugh)
          }
          className="btn btn-primary m-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlayingLaugh ? "Stop Luffy's Laugh" : "Play Luffy's Laugh"}
        </motion.button>

        <motion.button
          onClick={() =>
            toggleSound(
              isPlayingSword,
              setIsPlayingSword,
              playSword,
              stopSword
            )
          }
          className="btn btn-primary m-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlayingSword ? "Stop Zoro's Sword" : "Play Zoro's Sword"}
        </motion.button>

        <motion.button
          onClick={() =>
            toggleSound(isPlayingMoney, setIsPlayingMoney, playMoney, stopMoney)
          }
          className="btn btn-primary m-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlayingMoney ? "Stop Nami's Money" : "Play Nami's Money"}
        </motion.button>

        <motion.button
          onClick={() =>
            toggleSound(
              isPlayingDenDenMushi,
              setIsPlayingDenDenMushi,
              playDenDenMushi,
              stopDenDenMushi
            )
          }
          className="btn btn-primary m-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlayingDenDenMushi
            ? "Stop Den Den Mushi"
            : "Play Den Den Mushi"}
        </motion.button>
      </div>

      {/* Ship Model */}
      <div className="container mt-5">
        <div style={{ height: "500px", width: "100%" }}>
          <ShipModel />
        </div>
      </div>

      {/* Volume Slider */}
      <div className="mt-4 text-center">
        <label htmlFor="volume" className="text-warning me-2">
          Volume:
        </label>
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="volume-slider"
        />
      </div>
    </div>
  );
}
