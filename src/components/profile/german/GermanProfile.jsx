import { useState } from 'react';
import { germanData } from './germanData';
import { germanStyles } from './germanStyles';
import { useMediaQuery } from '../../../hooks/MediaQuery';

function GermanProfile() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Estados para controlar qué secciones están expandidas
  const [showMovies, setShowMovies] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  return (
    <div style={germanStyles.profileContainer}>
      {/* HEADER - Tu foto, nombre y rol */}
      <div style={germanStyles.profileHeader}>
        <div style={germanStyles.headerContent(isMobile)}>
          <div style={germanStyles.imageContainer}>
            <img 
              src={germanData.image} 
              alt={germanData.name}
              style={germanStyles.profileImage}
            />
          </div>
          <div style={germanStyles.textContainer}>
            <h1 style={germanStyles.name}>{germanData.name}</h1>
            <p style={germanStyles.role}>{germanData.role}</p>
          </div>
        </div>
      </div>

      {/* SECCIÓN DE INFORMACIÓN - Biografía y habilidades */}
      <div style={germanStyles.infoSection}>
        <h2 style={germanStyles.sectionTitle}>Sobre mí</h2>
        <p style={germanStyles.bioText}>{germanData.bio}</p>

        <h2 style={germanStyles.sectionTitle}>Habilidades</h2>
        <div style={germanStyles.skillsContainer}>
          {germanData.skills.map((skill, index) => (
            <span key={index} style={germanStyles.skillBadge}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* SECCIÓN DE PELÍCULAS */}
      <div style={germanStyles.customSection}>
        <button 
          onClick={() => setShowMovies(!showMovies)}
          style={germanStyles.toggleButton}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <span>🎬 Mis Películas Favoritas</span>
          <span>{showMovies ? '▲' : '▼'}</span>
        </button>

        {showMovies && (
          <div style={germanStyles.cardsContainer}>
            {germanData.movies.map((movie, index) => (
              <div 
                key={index} 
                style={germanStyles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <h3 style={germanStyles.cardTitle}>{movie.title}</h3>
                <p style={germanStyles.cardSubtitle}>
                  {movie.year} • Director: {movie.director}
                </p>
                <p style={germanStyles.cardText}>{movie.reason}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SECCIÓN DE MÚSICA */}
      <div style={germanStyles.customSection}>
        <button 
          onClick={() => setShowMusic(!showMusic)}
          style={germanStyles.toggleButton}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <span>🎵 Mi Música Favorita</span>
          <span>{showMusic ? '▲' : '▼'}</span>
        </button>

        {showMusic && (
          <div style={germanStyles.cardsContainer}>
            {germanData.music.map((item, index) => (
              <div 
                key={index} 
                style={germanStyles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <h3 style={germanStyles.cardTitle}>{item.artist}</h3>
                <p style={germanStyles.cardSubtitle}>Género: {item.genre}</p>
                <p style={germanStyles.cardText}>{item.reason}</p>
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

export default GermanProfile;
