import { useState } from 'react';
import { juanData } from './juanData';
import { juanStyles } from './juanStyles';
import { useMediaQuery } from '../../../hooks/MediaQuery';

function JuanProfile() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Estados para controlar qué secciones están expandidas
  const [showMovies, setShowMovies] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  return (
    <div style={juanStyles.profileContainer}>
      {/* HEADER - Tu foto, nombre y rol */}
      <div style={juanStyles.profileHeader}>
        <div style={juanStyles.headerContent(isMobile)}>
          <div style={juanStyles.imageContainer}>
            <img 
              src={juanData.image} 
              alt={juanData.name}
              style={juanStyles.profileImage}
            />
          </div>
          <div style={juanStyles.textContainer}>
            <h1 style={juanStyles.name}>{juanData.name}</h1>
            <p style={juanStyles.role}>{juanData.role}</p>
          </div>
        </div>
      </div>

      {/* SECCIÓN DE INFORMACIÓN - Biografía y habilidades */}
      <div style={juanStyles.infoSection}>
        <h2 style={juanStyles.sectionTitle}>Sobre mí</h2>
        <p style={juanStyles.bioText}>{juanData.bio}</p>

        <h2 style={juanStyles.sectionTitle}>Habilidades</h2>
        <div style={juanStyles.skillsContainer}>
          {juanData.skills.map((skill, index) => (
            <span key={index} style={juanStyles.skillBadge}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* SECCIÓN DE PELÍCULAS */}
      <div style={juanStyles.customSection}>
        <button 
          onClick={() => setShowMovies(!showMovies)}
          style={juanStyles.toggleButton}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <span>🎬 Mis Películas Favoritas</span>
          <span>{showMovies ? '▲' : '▼'}</span>
        </button>

        {showMovies && (
          <div style={juanStyles.cardsContainer}>
            {juanData.movies.map((movie, index) => (
              <div 
                key={index} 
                style={juanStyles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <h3 style={juanStyles.cardTitle}>{movie.title}</h3>
                <p style={juanStyles.cardSubtitle}>
                  {movie.year} • Director: {movie.director}
                </p>
                <p style={juanStyles.cardText}>{movie.reason}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SECCIÓN DE MÚSICA */}
      <div style={juanStyles.customSection}>
        <button 
          onClick={() => setShowMusic(!showMusic)}
          style={juanStyles.toggleButton}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <span>🎵 Mi Música Favorita</span>
          <span>{showMusic ? '▲' : '▼'}</span>
        </button>

        {showMusic && (
          <div style={juanStyles.cardsContainer}>
            {juanData.music.map((item, index) => (
              <div 
                key={index} 
                style={juanStyles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <h3 style={juanStyles.cardTitle}>{item.artist}</h3>
                <p style={juanStyles.cardSubtitle}>Género: {item.genre}</p>
                <p style={juanStyles.cardText}>{item.reason}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* AQUÍ PUEDES AGREGAR MÁS SECCIONES PERSONALIZADAS */}
      {/* Por ejemplo: hobbies, proyectos, experiencia, etc. */}
    </div>
  );
}

export default JuanProfile;
