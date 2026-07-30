import { useState } from "react";
import { motion } from "framer-motion";

import Planet from "./Planet";
import "./constellation.css";

function Constellation({ system, index = 0 }) {
  const [activePlanet, setActivePlanet] = useState(null);

  if (!system) {
    console.error(
      "Constellation necesita recibir una propiedad llamada system."
    );

    return null;
  }

  const planets = Array.isArray(system.planets)
    ? system.planets
    : [];

  return (
    <motion.article
      className="constellation"
      style={{
        "--system-color": system.color || "#b897ff",
        "--system-glow":
          system.glow || "rgba(184, 151, 255, 0.45)",
      }}
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
      }}
    >
      <header className="constellation__header">
        <span className="constellation__number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <h3>{system.category || "Tecnologías"}</h3>

          <p>
            {system.subtitle ||
              "Herramientas que forman parte de mi proceso de desarrollo."}
          </p>
        </div>
      </header>

      <div className="constellation__universe">
        <div
          className="constellation__stars"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="constellation__orbit constellation__orbit--one" />
        <div className="constellation__orbit constellation__orbit--two" />
        <div className="constellation__orbit constellation__orbit--three" />

        <div className="constellation__sun">
          <span className="constellation__sun-core" />

          <span className="constellation__sun-label">
            {system.category || "Skills"}
          </span>
        </div>

        {planets.map((planet) => (
          <Planet
            key={planet.id}
            planet={planet}
            color={system.color || "#b897ff"}
            glow={
              system.glow ||
              "rgba(184, 151, 255, 0.45)"
            }
            isActive={activePlanet?.id === planet.id}
            onActivate={setActivePlanet}
            onDeactivate={() => setActivePlanet(null)}
          />
        ))}
      </div>

      <div
        className={`constellation__details ${
          activePlanet
            ? "constellation__details--visible"
            : ""
        }`}
        aria-live="polite"
      >
        {activePlanet ? (
          <>
            <div className="constellation__details-heading">
              <span className="constellation__details-planet" />

              <div>
                <span className="constellation__details-label">
                  Tecnología seleccionada
                </span>

                <h4>{activePlanet.name}</h4>
              </div>
            </div>

            <p>{activePlanet.description}</p>

            {activePlanet.projects?.length > 0 && (
              <div className="constellation__projects">
                <span>Presente en</span>

                <div className="constellation__project-list">
                  {activePlanet.projects.map((project) => (
                    <span
                      className="constellation__project"
                      key={project}
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="constellation__details-placeholder">
            <span className="constellation__details-symbol">
              ✦
            </span>

            <p>
              Explora los planetas para conocer cómo utilizo
              cada tecnología.
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default Constellation;