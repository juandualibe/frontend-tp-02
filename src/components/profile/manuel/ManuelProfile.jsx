"use client";

import { useState } from "react";
import { useMediaQuery } from "../../../hooks/MediaQuery";
import { manuelData } from "./manuelData";
import { manuelStyles as styles } from "./manuelStyles";
import Pokeball from "./Pokeball";

export default function ManuelProfile() {
  const [showMovies, setShowMovies] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header Section */}
      <section style={styles.header}>
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={styles.headerVideo}
        >
          <source src="/manuel_video_header.mp4" type="video/mp4" />
        </video>
        {/* Contenido del header */}
        <div style={styles.headerContent(isTablet)}>
          <img
            src={manuelData.image || "/placeholder.svg"}
            alt={manuelData.name}
            style={styles.profileImage}
          />
          <div style={{ flex: 1 }}>
            <h1 style={styles.name}>{manuelData.name}</h1>
            <p style={styles.role}>{manuelData.role}</p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={styles.info}>
        <div style={{ margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <h2 style={styles.sectionTitle}>Sobre mí</h2>
            <p style={styles.bio}>{manuelData.bio}</p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={styles.sectionTitle}>Habilidades</h2>
            <div style={styles.skills}>
              {manuelData.skills.map((skill, index) => (
                <span key={index} style={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Movies and Music Section */}
      <section style={styles.sections}>
        <div style={{ margin: "0 auto", display: "flex", flexDirection: "column", gap: "30px" }}>
          {/* Movies */}
          <div style={styles.section}>
            <h3 style={styles.buttonText}>🎬 Películas Favoritas</h3>
            <div style={styles.pokeballsContainer}>
              {manuelData.movies.map((movie, index) => (
                <Pokeball key={index} item={movie} type="movie" />
              ))}
            </div>
          </div>

          {/* Music */}
          <div style={styles.section}>
            <h3 style={styles.buttonText}>🎵 Música Favorita</h3>
            <div style={styles.pokeballsContainer}>
              {manuelData.music.map((song, index) => (
                <Pokeball key={index} item={song} type="music" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
