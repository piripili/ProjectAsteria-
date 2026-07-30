export const constellations = [
  {
    id: "frontend",
    category: "Frontend",
    subtitle: "Interfaces que combinan estructura, diseño e interacción.",
    color: "#f7c873",
    glow: "rgba(247, 200, 115, 0.45)",
    planets: [
      {
        id: "html",
        name: "HTML",
        size: 56,
        orbit: 86,
        angle: 20,
        description:
          "La estructura desde la que comienzo a construir experiencias digitales claras y accesibles.",
        projects: ["Marcando Huellitas", "Project Asteria"],
      },
      {
        id: "css",
        name: "CSS",
        size: 52,
        orbit: 86,
        angle: 190,
        description:
          "La herramienta con la que transformo estructuras simples en interfaces con identidad.",
        projects: ["Marcando Huellitas", "Project Asteria"],
      },
      {
        id: "javascript",
        name: "JavaScript",
        shortName: "JS",
        size: 64,
        orbit: 132,
        angle: 105,
        description:
          "Me permite convertir una interfaz estática en una experiencia dinámica e interactiva.",
        projects: ["Marcando Huellitas", "Project Asteria"],
      },
      {
        id: "react",
        name: "React",
        size: 70,
        orbit: 132,
        angle: 285,
        description:
          "La tecnología con la que descubrí que el frontend también puede contar historias.",
        projects: ["Project Asteria", "Marcando Huellitas"],
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        shortName: "BS",
        size: 48,
        orbit: 172,
        angle: 45,
        description:
          "Me ayuda a desarrollar componentes responsivos y mantener consistencia visual.",
        projects: ["Marcando Huellitas"],
      },
      {
        id: "figma",
        name: "Figma",
        size: 52,
        orbit: 172,
        angle: 220,
        description:
          "El espacio donde organizo ideas visuales antes de convertirlas en código.",
        projects: ["Project Asteria"],
      },
    ],
  },

  {
    id: "backend",
    category: "Backend",
    subtitle: "Lógica, datos y servicios que sostienen cada experiencia.",
    color: "#79b8ff",
    glow: "rgba(121, 184, 255, 0.45)",
    planets: [
      {
        id: "java",
        name: "Java",
        size: 72,
        orbit: 92,
        angle: 10,
        description:
          "La base de mi formación como desarrolladora Full Stack y de mi pensamiento orientado a objetos.",
        projects: ["Marcando Huellitas"],
      },
      {
        id: "spring",
        name: "Spring Boot",
        shortName: "Spring",
        size: 62,
        orbit: 92,
        angle: 190,
        description:
          "Lo utilizo para construir aplicaciones backend organizadas, escalables y conectadas con datos.",
        projects: ["Marcando Huellitas"],
      },
      {
        id: "rest",
        name: "API REST",
        shortName: "REST",
        size: 58,
        orbit: 138,
        angle: 85,
        description:
          "Me permite conectar el frontend con la lógica y los recursos del servidor.",
        projects: ["Marcando Huellitas"],
      },
      {
        id: "mysql",
        name: "MySQL",
        size: 58,
        orbit: 138,
        angle: 270,
        description:
          "La herramienta con la que almaceno y organizo información de forma estructurada.",
        projects: ["Marcando Huellitas"],
      },
      {
        id: "sql",
        name: "SQL",
        size: 48,
        orbit: 174,
        angle: 165,
        description:
          "Lo utilizo para consultar, relacionar y transformar información dentro de bases de datos.",
        projects: ["Análisis de datos", "Marcando Huellitas"],
      },
    ],
  },

  {
    id: "tools",
    category: "Herramientas",
    subtitle: "Tecnologías que acompañan mi proceso de desarrollo y colaboración.",
    color: "#b897ff",
    glow: "rgba(184, 151, 255, 0.45)",
    planets: [
      {
        id: "git",
        name: "Git",
        size: 58,
        orbit: 88,
        angle: 20,
        description:
          "Me permite controlar versiones, experimentar con seguridad y mantener organizado el desarrollo.",
        projects: ["Marcando Huellitas", "Project Asteria"],
      },
      {
        id: "github",
        name: "GitHub",
        size: 64,
        orbit: 88,
        angle: 200,
        description:
          "El espacio donde documento, comparto y publico mis proyectos.",
        projects: ["Marcando Huellitas", "Project Asteria"],
      },
      {
        id: "vscode",
        name: "VS Code",
        shortName: "VS Code",
        size: 56,
        orbit: 136,
        angle: 95,
        description:
          "Mi entorno principal para desarrollar, depurar y organizar aplicaciones.",
        projects: ["Marcando Huellitas", "Project Asteria"],
      },
      {
        id: "vite",
        name: "Vite",
        size: 52,
        orbit: 136,
        angle: 280,
        description:
          "Lo utilizo para crear proyectos frontend rápidos y con una configuración ligera.",
        projects: ["Project Asteria"],
      },
      {
        id: "jira",
        name: "Jira",
        size: 48,
        orbit: 174,
        angle: 40,
        description:
          "Me ayuda a organizar tareas, historias de usuario y avances dentro de un sprint.",
        projects: ["Marcando Huellitas"],
      },
      {
        id: "slack",
        name: "Slack",
        size: 48,
        orbit: 174,
        angle: 215,
        description:
          "Una herramienta clave para la comunicación y coordinación dentro de equipos.",
        projects: ["Análisis de datos", "Marcando Huellitas"],
      },
    ],
  },

  {
    id: "data",
    category: "Datos y metodologías",
    subtitle: "Análisis, organización y colaboración para convertir información en decisiones.",
    color: "#70e1c1",
    glow: "rgba(112, 225, 193, 0.45)",
    planets: [
      {
        id: "python",
        name: "Python",
        size: 68,
        orbit: 92,
        angle: 25,
        description:
          "Lo utilizo para limpiar, analizar y visualizar información mediante procesos reproducibles.",
        projects: ["Análisis de datos"],
      },
      {
        id: "powerbi",
        name: "Power BI",
        shortName: "Power BI",
        size: 62,
        orbit: 92,
        angle: 205,
        description:
          "Me permite convertir datos en visualizaciones claras para facilitar la toma de decisiones.",
        projects: ["Análisis de datos"],
      },
      {
        id: "scrum",
        name: "Scrum",
        size: 54,
        orbit: 140,
        angle: 100,
        description:
          "Una metodología que utilizo para organizar el trabajo, colaborar y entregar valor de manera incremental.",
        projects: ["Marcando Huellitas"],
      },
      {
        id: "teamwork",
        name: "Trabajo colaborativo",
        shortName: "Equipo",
        size: 58,
        orbit: 140,
        angle: 285,
        description:
          "Combino comunicación, responsabilidad y escucha para construir soluciones junto con otras personas.",
        projects: ["Marcando Huellitas", "Análisis de datos"],
      },
    ],
  },
];