export default function ComponentTreeDiagram() {
  return (
    <div style={styles.diagramContainer}>
      <h2 style={styles.diagramTitle}>
        Árbol de Renderizado (Jerarquía de Componentes)
      </h2>
      <p style={styles.diagramDescription}>
        Este diagrama muestra cómo se organiza la aplicación a nivel de
        componentes, indicando qué componentes renderiza cada página y sus
        relaciones jerárquicas después de la refactorización.
      </p>

      <div style={styles.diagram}>
        <div style={styles.treeNode}>
          <div style={styles.nodeBox}>
            <strong>App (Root Layout)</strong>
            <span style={styles.nodeFile}>app/layout.jsx</span>
          </div>

          <div style={styles.children}>
            <div style={styles.branch}>
              <div style={styles.nodeBox}>
                <strong>HomePage</strong>
                <span style={styles.nodeFile}>
                  containers/pages/HomePage.jsx
                </span>
                <span style={styles.nodeRoute}>Ruta: /home</span>
              </div>
              <div style={styles.subChildren}>
                <div style={styles.nodeBox}>
                  <strong>Sidebar</strong>
                  <span style={styles.nodeFile}>
                    components/common/Sidebar.jsx
                  </span>
                </div>
                <div style={styles.nodeBox}>
                  <strong>HeroSection</strong>
                  <span style={styles.nodeFile}>
                    components/home/HeroSection.jsx
                  </span>
                </div>
                <div style={styles.nodeBox}>
                  <strong>TeamSection</strong>
                  <span style={styles.nodeFile}>
                    components/home/TeamSection.jsx
                  </span>
                </div>
                <div style={styles.subChildren}>
                  <div style={styles.nodeBox}>
                    <strong>TeamCard</strong>
                    <span style={styles.nodeFile}>
                      components/home/TeamCard.jsx
                    </span>
                  </div>
                </div>
                <div style={styles.nodeBox}>
                  <strong>Footer</strong>
                  <span style={styles.nodeFile}>
                    components/common/Footer.jsx
                  </span>
                </div>
              </div>
            </div>

            <div style={styles.branch}>
              <div style={styles.nodeBox}>
                <strong>AntiHeroesPage</strong>
                <span style={styles.nodeFile}>
                  containers/pages/AntiHeroesPage.jsx
                </span>
                <span style={styles.nodeRoute}>Ruta: /antiheroes</span>
              </div>
              <div style={styles.subChildren}>
                <div style={styles.nodeBox}>
                  <strong>useAntiHeroes (Hook)</strong>
                  <span style={styles.nodeFile}>
                    components/antiheroes/useAntiHeroes.js
                  </span>
                </div>
                <div style={styles.nodeBox}>
                  <strong>AntiHeroesHeader</strong>
                  <span style={styles.nodeFile}>
                    components/antiheroes/AntiHeroesHeader.jsx
                  </span>
                </div>
                <div style={styles.nodeBox}>
                  <strong>AntiHeroesControls</strong>
                  <span style={styles.nodeFile}>
                    components/antiheroes/AntiHeroesControls.jsx
                  </span>
                </div>
                <div style={styles.subChildren}>
                  <div style={styles.nodeBox}>
                    <strong>SearchBar</strong>
                    <span style={styles.nodeFile}>
                      components/antiheroes/SearchBar.jsx
                    </span>
                  </div>
                  <div style={styles.nodeBox}>
                    <strong>UniverseFilter</strong>
                    <span style={styles.nodeFile}>
                      components/antiheroes/UniverseFilter.jsx
                    </span>
                  </div>
                </div>
                <div style={styles.nodeBox}>
                  <strong>AntiHeroesGrid</strong>
                  <span style={styles.nodeFile}>
                    components/antiheroes/AntiHeroesGrid.jsx
                  </span>
                </div>
                <div style={styles.subChildren}>
                  <div style={styles.nodeBox}>
                    <strong>AntiHeroCard</strong>
                    <span style={styles.nodeFile}>
                      components/antiheroes/AntiHeroCard.jsx
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.legend}>
        <h3 style={styles.legendTitle}>Mejoras de la Refactorización:</h3>
        <ul style={styles.legendList}>
          <li style={styles.legendItem}>
            <strong>Separación de responsabilidades:</strong> Cada componente
            tiene una única responsabilidad
          </li>
          <li style={styles.legendItem}>
            <strong>Custom Hooks:</strong> Lógica de estado extraída a hooks
            reutilizables (useAntiHeroes, useApiData)
          </li>
          <li style={styles.legendItem}>
            <strong>Componentes pequeños:</strong> Más fáciles de mantener,
            testear y reutilizar
          </li>
          <li style={styles.legendItem}>
            <strong>Organización por feature:</strong> Componentes agrupados por
            funcionalidad
          </li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  diagramContainer: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%)",
    border: "2px solid #333",
    borderRadius: "12px",
    padding: "40px",
    marginBottom: "40px",
  },
  diagramTitle: {
    fontSize: "28px",
    color: "#ff0000",
    marginBottom: "15px",
    fontWeight: "700",
  },
  diagramDescription: {
    fontSize: "16px",
    color: "#b0b0b0",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  diagram: {
    background: "#0a0a0a",
    border: "1px solid #333",
    borderRadius: "8px",
    padding: "30px",
    overflowX: "auto",
  },
  treeNode: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "250px",
  },
  nodeBox: {
    background: "linear-gradient(135deg, #2a1a1a 0%, #1a1a1a 100%)",
    border: "2px solid #8b0000",
    borderRadius: "8px",
    padding: "15px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    flexWrap: "wrap",
    minWidth: 0,
  },
  nodeFile: {
    fontSize: "12px",
    color: "#888",
    fontFamily: "monospace",
    overflowWrap: "anywhere",
    wordBreak: "break-word",
  },
  nodeRoute: {
    fontSize: "12px",
    color: "#ff6666",
    fontStyle: "italic",
  },
  children: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginLeft: "5px",
    paddingLeft: "20px",
    borderLeft: "2px solid #8b0000",
  },
  branch: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  subChildren: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginLeft: "5px",
    paddingLeft: "20px",
    borderLeft: "2px solid #666",
  },
  legend: {
    marginTop: "30px",
    padding: "20px",
    background: "rgba(139, 0, 0, 0.1)",
    border: "1px solid #8b0000",
    borderRadius: "8px",
  },
  legendTitle: {
    fontSize: "18px",
    color: "#ff6666",
    marginBottom: "15px",
    fontWeight: "600",
  },
  legendList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  legendItem: {
    fontSize: "14px",
    color: "#b0b0b0",
    marginBottom: "10px",
    lineHeight: "1.6",
  },
};
