import { profilesData } from "./profilesData";

export default function ProfileInfo({ memberId }) {
  const profile = profilesData[memberId];

  if (!profile) return null;

  return (
    <section style={styles.info}>
      <div style={styles.container}>
        <div style={styles.bioSection}>
          <h2 style={styles.sectionTitle}>Sobre mí</h2>
          <p style={styles.bio}>{profile.bio}</p>
        </div>

        <div style={styles.skillsSection}>
          <h2 style={styles.sectionTitle}>Habilidades</h2>
          <div style={styles.skills}>
            {profile.skills.map((skill, index) => (
              <span key={index} style={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  info: {
    padding: "60px 40px",
  },
  container: {
    margin: "0 auto",
  },
  bioSection: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "32px",
    color: "#ff0000",
    marginBottom: "20px",
    fontWeight: "700",
  },
  bio: {
    fontSize: "18px",
    color: "#b0b0b0",
    lineHeight: "1.8",
  },
  skillsSection: {
    marginBottom: "40px",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },
  skillTag: {
    background: "linear-gradient(90deg, #8b0000 0%, #b30000 100%)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "20px",
    fontSize: "16px",
    fontWeight: "600",
    border: "1px solid #ff0000",
  },
};
