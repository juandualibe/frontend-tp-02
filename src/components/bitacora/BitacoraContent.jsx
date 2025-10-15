import BitacoraSection from "./BitacoraSection";

export default function BitacoraContent() {
  const sections = [
    {
      title: "Decisiones de Diseño",
      items: [
        "Tema de antiheroes con paleta oscura (negro, rojo sangre) inspirada en Joker y Deadpool",
        "Tipografía Creepster para títulos principales, creando atmósfera oscura y dramática",
        "Sidebar fijo con navegación vertical para acceso rápido a todas las secciones",
        "Diseño responsive con 3 breakpoints: móvil (<768px), tablet (768-1024px), desktop (>1024px)",
        "Componentes modulares y reutilizables siguiendo principios de React",
      ],
    },
    {
      title: "Dificultades Encontradas",
      items: [
        "Migración de HTML/CSS/JS vanilla a un proyecto de React utilizando Vite y React Router.",
        "Implementación de estilos inline sin usar Tailwind o Bootstrap como se solicitó",
        "Manejo de rutas dinámicas para perfiles individuales de cada miembro",
        "Integración de una API pública real, manejando estados de carga y posibles errores",
        "Organización de componentes siguiendo buenas prácticas de React",
      ],
    },
    {
      title: "Cambios Importantes",
      items: [
        "Conversión de sitio multi-página (MPA) a una Single Page Application (SPA) con React Router",
        "Creación de 22 objetos JSON con datos de antiheroes para la galería local",
        "Implementación de filtros y búsqueda en tiempo real para la sección de antiheroes",
        "Integración con la API pública de TVMaze para obtener datos de series de anti-héroes",
        "Diagramas interactivos mostrando arquitectura de componentes y estructura de carpetas",
      ],
    },
    {
      title: "Tecnologías Utilizadas",
      items: [
        "React 18 con JavaScript (JSX)",
        "Vite como herramienta de construcción y empaquetado",
        "React Router DOM para el enrutamiento de la SPA",
        "Estilos inline con objetos JavaScript para la componentización del CSS",
        "Hooks de React: useState, useEffect, useParams",
        "Fetch API para consumo de datos externos",
      ],
    },
    {
      title: "Estructura del Proyecto",
      items: [
        "containers/pages/ - Componentes de página principales que ensamblan la UI",
        "components/ - Componentes reutilizables organizados por funcionalidad (feature)",
        "data/ - Archivos JSON con datos locales estáticos",
        "hooks/ - Lógica reutilizable (custom hooks) como useMediaQuery",
        "router/ - Configuración central de las rutas de la aplicación",
      ],
    },
  ];

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Bitácora del Proyecto</h1>
        <p style={styles.subtitle}>
          Documentación del proceso de desarrollo - TP1 a TP2
        </p>
      </div>

      <div style={styles.content}>
        {sections.map((section, index) => (
          <BitacoraSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    margin: "0 auto",
    padding: "60px 40px",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  title: {
    fontSize: "48px",
    color: "#ff0000",
    marginBottom: "15px",
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 15px #ff0000, 0 0 30px #8b0000",
  },
  subtitle: {
    fontSize: "18px",
    color: "#888",
    fontStyle: "italic",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
};