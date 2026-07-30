export const projects = [
  {
    id: "asteria",
    number: "01",
    title: "Project Asteria",
    eyebrow: "Portafolio interactivo",
    status: "En evolución",
    year: "2026",
    summary: "Un portafolio personal construido como una experiencia narrativa para presentar mi transición al desarrollo de software.",
    quote: "No quería crear otro portafolio. Quería construir un lugar donde pudiera contar mi historia como desarrolladora.",
    problem: "Crear una presencia profesional que no se sintiera como una plantilla y que comunicara tanto mis habilidades técnicas como mi identidad.",
    solution: "Diseñé una experiencia visual inspirada en constelaciones, con animaciones, audio ambiental, navegación responsiva y componentes reutilizables.",
    contribution: [
      "Diseño de experiencia e identidad visual",
      "Desarrollo de componentes con React",
      "Animaciones e interacción",
      "Despliegue con GitHub Pages",
      "Accesibilidad y diseño responsivo"
    ],
    technologies: ["React", "Vite", "JavaScript", "CSS", "Framer Motion", "Git", "GitHub"],
    links: [
      { label: "Ver sitio", href: "https://piripili.github.io/ProjectAsteria-/", type: "primary" },
      { label: "Repositorio", href: "https://github.com/piripili/ProjectAsteria-", type: "secondary" }
    ],
    accent: "#b897ff",
    glow: "rgba(184, 151, 255, 0.30)",
    visual: "asteria"
  },
  {
    id: "marcando-huellitas",
    number: "02",
    title: "Marcando Huellitas",
    eyebrow: "Ecommerce con propósito social",
    status: "En desarrollo",
    year: "2026",
    summary: "Una plataforma de comercio electrónico para productos de mascotas que integra una propuesta de apoyo y visibilidad para refugios de rescate animal.",
    quote: "Tecnología que conecta a personas, mascotas y refugios mediante una experiencia digital con propósito.",
    problem: "Los refugios suelen tener poca visibilidad y recursos limitados, mientras las personas buscan formas claras de apoyar causas de bienestar animal.",
    solution: "Desarrollamos un ecommerce que combina catálogo de productos, experiencia de compra y una propuesta de vinculación con refugios.",
    contribution: [
      "Desarrollo frontend",
      "Maquetación responsiva",
      "Validaciones con JavaScript",
      "Organización de tareas con Jira",
      "Trabajo colaborativo con Scrum",
      "Control de versiones con Git y GitHub",
      "Diseño y prototipado con Figma"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Java", "SQL / MySQL", "Git", "GitHub", "Jira", "Scrum", "Figma"],
    links: [],
    accent: "#f7c873",
    glow: "rgba(247, 200, 115, 0.26)",
    visual: "huellitas"
  },
  {
    id: "hooploop",
    number: "03",
    title: "HoopLoop",
    eyebrow: "Hackathon de desarrollo web",
    status: "Proyecto terminado",
    year: "2026",
    summary: "Tienda digital de artículos deportivos con temática de básquetbol, desarrollada colaborativamente durante un hackathon de siete horas.",
    quote: "Un reto de tiempo limitado donde la organización, la comunicación y la rapidez fueron tan importantes como el desarrollo.",
    problem: "Diseñar y desarrollar una tienda deportiva funcional dentro de un periodo de siete horas, distribuyendo responsabilidades y manteniendo una experiencia visual coherente.",
    solution: "Creamos una tienda digital especializada en básquetbol, con navegación por categorías y productos organizados para facilitar la exploración del catálogo.",
    contribution: [
      "Desarrollo completo del apartado de productos",
      "Creación de la estructura HTML del catálogo",
      "Organización de productos en gorras, tenis y jerseys",
      "Clasificación de artículos por equipos de básquetbol",
      "Maquetación responsiva con Bootstrap",
      "Integración de estilos con CSS",
      "Trabajo colaborativo bajo un límite de siete horas"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Diseño UI", "Git", "Trabajo colaborativo"],
    links: [
      { label: "Ver proyecto", href: "https://landinbasquetbol.netlify.app/productos", type: "primary" }
    ],
    accent: "#ff9d6c",
    glow: "rgba(255, 157, 108, 0.26)",
    visual: "hooploop"
  },
  {
    id: "spotify-2023",
    number: "04",
    title: "Spotify 2023",
    eyebrow: "Análisis exploratorio de datos",
    status: "Proyecto terminado",
    year: "2026",
    summary: "Análisis de las tendencias de las canciones más escuchadas en Spotify durante 2023 mediante limpieza, exploración y visualización de datos.",
    quote: "Convertir datos musicales en patrones comprensibles sobre popularidad, características y consumo.",
    problem: "Comprender qué variables y patrones aparecen con mayor frecuencia entre las canciones más escuchadas del año.",
    solution: "Se realizó limpieza de datos, análisis exploratorio y visualización en Google Colab para identificar relaciones y tendencias relevantes.",
    contribution: [
      "Preparación y limpieza de datos",
      "Codificación en Python",
      "Implementación de una parte del análisis",
      "Interpretación de resultados",
      "Comunicación del equipo mediante Slack"
    ],
    technologies: ["Python", "Pandas", "Google Colab", "Matplotlib", "Análisis de datos", "Slack"],
    links: [
      { label: "Abrir Google Colab", href: "https://colab.research.google.com/drive/12YEwr0SOVMn43v4OFj97TIsohsM2jNyR", type: "primary" },
      { label: "Ver documento", href: "https://docs.google.com/document/d/19_ajwzPzjJoLlCCVCrynbHXM7c5CdqUz/edit", type: "secondary" }
    ],
    accent: "#70e1c1",
    glow: "rgba(112, 225, 193, 0.25)",
    visual: "spotify"
  },
  {
    id: "ile-cdmx",
    number: "05",
    title: "Interrupción Legal del Embarazo en CDMX",
    eyebrow: "Análisis de datos públicos",
    status: "Proyecto terminado",
    year: "2026",
    summary: "Análisis de tendencias relacionadas con la Interrupción Legal del Embarazo en la Ciudad de México mediante limpieza, exploración y visualización de datos.",
    quote: "Usar datos para observar cambios históricos y comunicar información compleja de manera clara y responsable.",
    problem: "Organizar e interpretar información histórica para identificar tendencias relevantes dentro de un tema social y de salud pública.",
    solution: "El equipo procesó y analizó datos en Google Colab, documentó hallazgos y preparó una presentación para comunicar los resultados.",
    contribution: [
      "Codificación de una parte del análisis",
      "Implementación y validación",
      "Interpretación de resultados",
      "Trabajo colaborativo",
      "Comunicación mediante Slack"
    ],
    technologies: ["Python", "Pandas", "Google Colab", "Matplotlib", "Análisis de datos", "Slack"],
    links: [
      { label: "Abrir Google Colab", href: "https://colab.research.google.com/drive/1h6QGWcJNukPIn6dFdaGX49CcQyDDcfWd", type: "primary" },
      { label: "Ver presentación", href: "https://docs.google.com/presentation/d/185mzRi1MuR9pPLg1IH4E_Vwh5_nZhnvF-bDSP9i9mXc/edit", type: "secondary" }
    ],
    accent: "#79b8ff",
    glow: "rgba(121, 184, 255, 0.25)",
    visual: "data"
  }
];
