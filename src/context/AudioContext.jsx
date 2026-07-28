import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const introAudioRef = useRef(null);
  const ambienceAudioRef = useRef(null);

  const [isAmbiencePlaying, setIsAmbiencePlaying] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const introAudio = introAudioRef.current;
    const ambienceAudio = ambienceAudioRef.current;

    if (introAudio) {
      introAudio.volume = 0.4;
    }

    if (ambienceAudio) {
      ambienceAudio.volume = 0.12;
    }

    return () => {
      introAudio?.pause();
      ambienceAudio?.pause();
    };
  }, []);

  const playIntro = useCallback(async () => {
    const introAudio = introAudioRef.current;

    if (!introAudio) return;

    try {
      introAudio.currentTime = 0;
      await introAudio.play();
    } catch (error) {
      console.warn("El navegador bloqueó el sonido inicial:", error);
    }
  }, []);

  const enterAsteria = useCallback(async () => {
    setHasEntered(true);
    await playIntro();
  }, [playIntro]);

  const toggleAmbience = useCallback(async () => {
    const ambienceAudio = ambienceAudioRef.current;

    if (!ambienceAudio) return;

    try {
      if (ambienceAudio.paused) {
        await ambienceAudio.play();
        setIsAmbiencePlaying(true);
      } else {
        ambienceAudio.pause();
        setIsAmbiencePlaying(false);
      }
    } catch (error) {
      console.warn("No se pudo reproducir el ambiente:", error);
      setIsAmbiencePlaying(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      hasEntered,
      isAmbiencePlaying,
      enterAsteria,
      toggleAmbience,
    }),
    [
      hasEntered,
      isAmbiencePlaying,
      enterAsteria,
      toggleAmbience,
    ],
  );

  return (
    <AudioContext.Provider value={value}>
      <audio
        ref={introAudioRef}
        src="/audio/asteria-intro.mp3"
        preload="auto"
      />

      <audio
        ref={ambienceAudioRef}
        src="/audio/asteria-ambience.mp3"
        preload="metadata"
        loop
      />

      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error(
      "useAudio debe utilizarse dentro de AudioProvider.",
    );
  }

  return context;
}