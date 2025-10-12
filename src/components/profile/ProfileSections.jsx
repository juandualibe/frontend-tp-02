"use client";

import { useState } from "react";
import { profilesData } from "./profilesData";

export default function ProfileSections({ memberId }) {
  const [showMovies, setShowMovies] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const profile = profilesData[memberId];

  if (!profile) return null;

  return (
    <section style={styles.sections}>
      <div style={styles.container}>
        <div style={styles.section}>
          <button
            style={styles.toggleButton}
            onClick={() => setShowMovies(!showMovies)}
          >
            <span style={styles.buttonText}>Películas Favoritas</span>
            <span style={styles.arrow}>{showMovies ? "▼" : "▶"}</span>
          </button>
          {showMovies && (
            <ul style={styles.list}>
              {profile.movies.map((movie, index) => (
                <li key={index} style={styles.listItem}>
                  <a
                    href={movie.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                  >
                    {movie.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={styles.section}>
          <button
            style={styles.toggleButton}
            onClick={() => setShowMusic(!showMusic)}
          >
            <span style={styles.buttonText}>Música Favorita</span>
            <span style={styles.arrow}>{showMusic ? "▼" : "▶"}</span>
          </button>
          {showMusic && (
            <ul style={styles.list}>
              {profile.music.map((song, index) => (
                <li key={index} style={styles.listItem}>
                  <a
                    href={song.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                  >
                    {song.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

const styles = {
  sections: {
    padding: "0 40px 60px",
  },
  container: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  section: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
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
    color: "#ff0000",
    fontWeight: "700",
  },
  arrow: {
    fontSize: "20px",
    color: "#ff0000",
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
