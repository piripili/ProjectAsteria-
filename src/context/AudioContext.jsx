import {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const introAudioRef = useRef(null);
  const ambienceAudioRef = useRef(null);

  const [isAmbiencePlaying, setIsAmbiencePlaying] =
    useState(false);

  const baseUrl = import.meta.env.BASE_URL;

  const playIntro = async () => {
    const audio = introAudioRef.current;

    if (!audio) return;

    try {
      audio.currentTime = 0;
      audio.volume = 0.45;

      await audio.play();
    } catch (error) {
      console.warn(
        "No fue posible reproducir el audio de introducción:",
        error
      );
    }
  };

  const playAmbience = async () => {
    const audio = ambienceAudioRef.current;

    if (!audio) return;

    try {
      audio.volume = 0.22;

      await audio.play();

      setIsAmbiencePlaying(true);
    } catch (error) {
      console.error(
        "No fue posible reproducir la atmósfera:",
        error
      );
    }
  };

  const pauseAmbience = () => {
    const audio = ambienceAudioRef.current;

    if (!audio) return;

    audio.pause();

    setIsAmbiencePlaying(false);
  };

  const toggleAmbience = async () => {
    const audio = ambienceAudioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await playAmbience();
    } else {
      pauseAmbience();
    }
  };

  const enterAsteria = async () => {
    await playIntro();
  };

  const value = useMemo(
    () => ({
      enterAsteria,
      playIntro,
      playAmbience,
      pauseAmbience,
      toggleAmbience,
      isAmbiencePlaying,
    }),
    [isAmbiencePlaying]
  );

  return (
    <AudioContext.Provider value={value}>
      {children}

      <audio
        ref={introAudioRef}
        src={`${baseUrl}audio/asteria-intro.mp3`}
        preload="auto"
      />

      <audio
        ref={ambienceAudioRef}
        src={`${baseUrl}audio/asteria-ambience.mp3`}
        preload="metadata"
        loop
      />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error(
      "useAudio debe utilizarse dentro de AudioProvider."
    );
  }

  return context;
}