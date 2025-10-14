import { useState } from 'react';
import { nicolasData } from './nicolasData';
import { nicolasStyles } from './nicolasStyles';
import { useMediaQuery } from '../../../hooks/MediaQuery';

function NicolasProfile() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Estados para controlar qué secciones están expandidas
  const [showMovies, setShowMovies] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  return (
    <div style={nicolasStyles.profileContainer}>
      {/* HEADER - Tu foto, nombre y rol */}
      <div style={nicolasStyles.profileHeader}>
        <div style={nicolasStyles.headerContent(isMobile)}>
          <div style={nicolasStyles.imageContainer}>
            <img 
              src={nicolasData.image} 
              alt={nicolasData.name}
              style={nicolasStyles.profileImage}
            />
          </div>
          <div style={nicolasStyles.textContainer}>
            <h1 style={nicolasStyles.name}>{nicolasData.name}</h1>
            <p style={nicolasStyles.role}>{nicolasData.role}</p>
          </div>
        </div>
      </div>

      {/* SECCIÓN DE INFORMACIÓN - Biografía y habilidades */}
      <div style={nicolasStyles.infoSection}>
        <h2 style={nicolasStyles.sectionTitle}>Sobre mí</h2>
        <p style={nicolasStyles.bioText}>{nicolasData.bio}</p>

        <h2 style={nicolasStyles.sectionTitle}>Habilidades</h2>
        <div style={nicolasStyles.skillsContainer}>
          {nicolasData.skills.map((skill, index) => (
            <span key={index} style={nicolasStyles.skillBadge}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* SECCIÓN DE PELÍCULAS */}
      <div style={nicolasStyles.customSection}>
        <button 
          onClick={() => setShowMovies(!showMovies)}
          style={nicolasStyles.toggleButton}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <span>🎬 Mis Películas Favoritas</span>
          <span>{showMovies ? '▲' : '▼'}</span>
        </button>

        {showMovies && (
          <div style={nicolasStyles.cardsContainer}>
            {nicolasData.movies.map((movie, index) => (
              <div 
                key={index} 
                style={nicolasStyles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <h3 style={nicolasStyles.cardTitle}>{movie.title}</h3>
                <p style={nicolasStyles.cardSubtitle}>
                  {movie.year} • Director: {movie.director}
                </p>
                <p style={nicolasStyles.cardText}>{movie.reason}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SECCIÓN DE MÚSICA */}
      <div style={nicolasStyles.customSection}>
        <button 
          onClick={() => setShowMusic(!showMusic)}
          style={nicolasStyles.toggleButton}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <span>🎵 Mi Música Favorita</span>
          <span>{showMusic ? '▲' : '▼'}</span>
        </button>

        {showMusic && (
          <div style={nicolasStyles.cardsContainer}>
            {nicolasData.music.map((item, index) => (
              <div 
                key={index} 
                style={nicolasStyles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <h3 style={nicolasStyles.cardTitle}>{item.artist}</h3>
                <p style={nicolasStyles.cardSubtitle}>Género: {item.genre}</p>
                <p style={nicolasStyles.cardText}>{item.reason}</p>
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

export default NicolasProfile;
