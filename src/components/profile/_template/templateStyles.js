// Template de estilos para perfil personalizado
// Personaliza estos estilos según tu tema preferido

export const templateStyles = {
  // Estilos del Header
  header: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)", // Cambia estos colores
    padding: "60px 40px",
    borderBottom: "3px solid #666", // Cambia el color del borde
  },
  headerContent: (isTablet) => ({
    margin: "0 auto",
    display: "flex",
    flexDirection: isTablet ? "row" : "column",
    alignItems: "center",
    columnGap: "40px",
  }),
  profileImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #0088cc", // Color del borde de tu imagen
    boxShadow: "0 0 30px rgba(0, 136, 204, 0.5)", // Sombra de tu color
  },
  name: {
    fontSize: "48px",
    color: "#0088cc", // Tu color principal
    marginBottom: "10px",
    fontFamily: "Arial, sans-serif", // Cambia la fuente si quieres
    textShadow: "0 0 15px rgba(0, 136, 204, 0.5)",
  },
  role: {
    fontSize: "24px",
    color: "#b0b0b0",
    fontStyle: "italic",
  },

  // Estilos de Info
  info: {
    padding: "60px 40px",
    background: "#0a0a0a", // Fondo de la sección
  },
  sectionTitle: {
    fontSize: "32px",
    color: "#0088cc", // Tu color principal
    marginBottom: "20px",
    fontWeight: "700",
  },
  bio: {
    fontSize: "18px",
    color: "#b0b0b0",
    lineHeight: "1.8",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },
  skillTag: {
    background: "linear-gradient(90deg, #0066aa 0%, #0088cc 100%)", // Tu gradiente
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "20px",
    fontSize: "16px",
    fontWeight: "600",
    border: "1px solid #0088cc",
  },

  // Estilos de Sections
  sections: {
    padding: "0 40px 60px",
    background: "#0a0a0a",
  },
  section: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
    border: "2px solid #333",
    borderRadius: "12px",
    padding: "30px",
  },
  toggleButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "0",
  },
  buttonText: {
    fontSize: "24px",
    color: "#0088cc", // Tu color principal
    fontWeight: "700",
  },
  arrow: {
    fontSize: "20px",
    color: "#0088cc", // Tu color principal
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "20px 0 0 0",
  },
  listItem: {
    marginBottom: "12px",
  },
  link: {
    fontSize: "16px",
    color: "#b0b0b0",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
};

// 💡 Tips de personalización:
// 1. Busca y reemplaza "#0088cc" con tu color favorito
// 2. Cambia los gradientes en "background"
// 3. Ajusta tamaños de fuente según tu preferencia
// 4. Modifica bordes, sombras y espaciados
// 5. ¡Experimenta! Esta es tu carpeta personal
