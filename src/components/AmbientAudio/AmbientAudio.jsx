import {
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";

import { useAudio } from "../../context/AudioContext";
import "./AmbientAudio.css";

function AmbientAudio() {
  const {
    toggleAmbience,
    isAmbiencePlaying,
  } = useAudio();

  return (
    <button
      type="button"
      className={`ambient-audio ${
        isAmbiencePlaying
          ? "ambient-audio--active"
          : ""
      }`}
      onClick={toggleAmbience}
      aria-pressed={isAmbiencePlaying}
      aria-label={
        isAmbiencePlaying
          ? "Pausar atmósfera"
          : "Activar atmósfera"
      }
    >
      <span
        className="ambient-audio__icon"
        aria-hidden="true"
      >
        {isAmbiencePlaying ? (
          <FiVolume2 />
        ) : (
          <FiVolumeX />
        )}
      </span>

      <span className="ambient-audio__text">
        {isAmbiencePlaying
          ? "Pausar atmósfera"
          : "Activar atmósfera"}
      </span>

      <span
        className="ambient-audio__waves"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </span>
    </button>
  );
}

export default AmbientAudio;