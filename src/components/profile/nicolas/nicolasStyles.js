// Estilos personalizados de Nicolás
// Aquí puedes cambiar todos los colores, tamaños, fuentes, etc.

export const nicolasStyles = {
  // Contenedor principal del perfil
  profileContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },

  // Encabezado del perfil (donde está tu foto y nombre)
  profileHeader: {
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", // Cambia estos colores
    padding: "4rem 2rem",
    textAlign: "center",
    color: "white"
  },

  // Función para estilos responsivos del contenido del header
  headerContent: (isMobile) => ({
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    gap: "2rem"
  }),

  // Contenedor de la imagen
  imageContainer: {
    flex: "0 0 auto"
  },

  // La imagen de perfil
  profileImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    border: "5px solid white", // Cambia el color del borde
    objectFit: "cover",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
  },

  // Contenedor de texto del header
  textContainer: {
    flex: 1,
    textAlign: "left"
  },

  // Tu nombre
  name: {
    fontSize: "3rem",
    fontWeight: "bold",
    margin: "0 0 0.5rem 0"
  },

  // Tu rol/título
  role: {
    fontSize: "1.5rem",
    opacity: 0.9,
    margin: 0
  },

  // Sección de información (biografía, habilidades)
  infoSection: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "3rem 2rem",
    flex: 1
  },

  // Título de las secciones (Sobre mí, Habilidades)
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#00f2fe" // Cambia este color para que combine con tu header
  },

  // Texto de la biografía
  bioText: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#333",
    marginBottom: "2rem"
  },

  // Contenedor de las habilidades
  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: "1rem"
  },

  // Cada badge de habilidad
  skillBadge: {
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", // Igual que el header
    color: "white",
    padding: "0.5rem 1.5rem",
    borderRadius: "25px",
    fontSize: "1rem",
    fontWeight: "500",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  },

  // Sección de películas/música
  customSection: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    backgroundColor: "#f8f9fa"
  },

  // Botón para expandir/colapsar
  toggleButton: {
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    color: "white",
    border: "none",
    padding: "1rem 2rem",
    fontSize: "1.2rem",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "600",
    transition: "transform 0.2s",
    marginBottom: "1rem"
  },

  // Contenedor de las tarjetas (películas/música)
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
    marginTop: "1.5rem"
  },

  // Cada tarjeta individual
  card: {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.2s, box-shadow 0.2s"
  },

  // Título de cada tarjeta
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#00f2fe" // Cambia para que combine con tu tema
  },

  // Subtítulo de la tarjeta
  cardSubtitle: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "1rem"
  },

  // Texto descriptivo de la tarjeta
  cardText: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#333"
  }
};
