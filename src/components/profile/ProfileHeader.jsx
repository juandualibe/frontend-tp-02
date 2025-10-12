import { useMediaQuery } from "../../hooks/MediaQuery";
import { profilesData } from "./profilesData";

export default function ProfileHeader({ memberId }) {
  const profile = profilesData[memberId];
  const isTablet = useMediaQuery("(min-width: 768px)");

  if (!profile) {
    return (
      <div style={styles.error}>
        <h1 style={styles.errorText}>Perfil no encontrado</h1>
      </div>
    );
  }

  return (
    <section style={styles.header}>
      <div style={styles.headerContent(isTablet)}>
        <img
          src={profile.image || "/placeholder.svg"}
          alt={profile.name}
          style={styles.profileImage}
        />
        <div style={styles.headerInfo}>
          <h1 style={styles.name}>{profile.name}</h1>
          <p style={styles.role}>{profile.role}</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  header: {
    background: "linear-gradient(135deg, #1a0a1a 0%, #2d0a1a 100%)",
    padding: "60px 40px",
    borderBottom: "3px solid #8b0000",
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
    border: "4px solid #ff0000",
    boxShadow: "0 0 30px rgba(255, 0, 0, 0.5)",
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontSize: "48px",
    color: "#ff0000",
    marginBottom: "10px",
    fontFamily: "Creepster, cursive",
    textShadow: "0 0 15px #ff0000",
  },
  role: {
    fontSize: "24px",
    color: "#b0b0b0",
    fontStyle: "italic",
  },
  error: {
    padding: "100px 40px",
    textAlign: "center",
  },
  errorText: {
    fontSize: "32px",
    color: "#ff0000",
  },
};
