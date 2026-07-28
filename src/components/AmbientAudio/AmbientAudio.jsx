import { FiVolume2, FiVolumeX } from "react-icons/fi";

import { useAudio } from "../../context/AudioContext";
import "./AmbientAudio.css";

function AmbientAudio() {
  const {
    isAmbiencePlaying,
    toggleAmbience,
  } = useAudio();

  return (
    <div className="ambient-audio">
      <button
        type="button"
        className={`ambient-audio__button ${
          isAmbiencePlaying
            ? "ambient-audio__button--active"
            : ""
        }`}
        onClick={toggleAmbience}
        aria-label={
          isAmbiencePlaying
            ? "Pausar música ambiental"
            : "Activar música ambiental"
        }
        title={
          isAmbiencePlaying
            ? "Pausar atmósfera"
            : "Activar atmósfera"
        }
      >
        <span className="ambient-audio__icon">
          {isAmbiencePlaying
            ? <FiVolume2 />
            : <FiVolumeX />}
        </span>

        <span className="ambient-audio__label">
          {isAmbiencePlaying
            ? "Atmósfera activa"
            : "Activar atmósfera"}
        </span>

        {isAmbiencePlaying && (
          <span
            className="ambient-audio__waves"
            aria-hidden="true"
          >
            <i />
            <i />
            <i />
          </span>
        )}
      </button>
    </div>
  );
}

export default AmbientAudio;