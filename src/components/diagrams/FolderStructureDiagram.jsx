export default function FolderStructureDiagram() {
  return (
    <div style={styles.diagramContainer}>
      <h2 style={styles.diagramTitle}>
        Organización de Carpetas (Refactorizada)
      </h2>
      <p style={styles.diagramDescription}>
        Estructura mejorada siguiendo las mejores prácticas de React: separación
        de páginas, componentes por feature, y lógica reutilizable.
      </p>

      <div style={styles.diagram}>
        <div style={styles.folderTree}>
          <div style={styles.folderItem}>
            <span style={styles.folderIcon}>📁</span>
            <strong>FrontendTP02/</strong>
          </div>

          <div style={styles.folderLevel}>
            <div style={styles.folderItem}>
              <span style={styles.folderIcon}>📁</span>
              <strong>src/</strong>
              <span style={styles.folderNote}>Configuración principal</span>
            </div>
            <div style={styles.folderLevel}>
              <div style={styles.fileItem}>
                <span style={styles.fileIcon}>⚛️</span>
                App.jsx
              </div>
              <div style={styles.fileItem}>
                <span style={styles.fileIcon}>🗺️</span>
                routes.jsx
              </div>
            </div>

            <div style={styles.folderItem}>
              <span style={styles.folderIcon}>📁</span>
              <strong>containers/</strong>
              <span style={styles.folderNote}>Páginas principales</span>
            </div>
            <div style={styles.folderLevel}>
              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                pages/
              </div>
              <div style={styles.folderLevel}>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>📄</span>
                  HomePage.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>📄</span>
                  BitacoraPage.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>📄</span>
                  ProfilePage.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>📄</span>
                  AntiHeroesPage.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>📄</span>
                  ApiDataPage.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>📄</span>
                  DiagramsPage.jsx
                </div>
              </div>
            </div>

            <div style={styles.folderItem}>
              <span style={styles.folderIcon}>📁</span>
              <strong>components/</strong>
              <span style={styles.folderNote}>
                Componentes organizados por feature
              </span>
            </div>
            <div style={styles.folderLevel}>
              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                common/
                <span style={styles.folderNote}>Compartidos</span>
              </div>
              <div style={styles.folderLevel}>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  Sidebar.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  Footer.jsx
                </div>
              </div>

              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                home/
              </div>
              <div style={styles.folderLevel}>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  HeroSection.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  TeamSection.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  TeamCard.jsx
                </div>
              </div>

              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                antiheroes/
              </div>
              <div style={styles.folderLevel}>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>🪝</span>
                  useAntiHeroes.js
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  AntiHeroesHeader.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  AntiHeroesControls.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  SearchBar.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  UniverseFilter.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  AntiHeroesGrid.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  AntiHeroCard.jsx
                </div>
              </div>

              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                api-data/
              </div>
              <div style={styles.folderLevel}>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>🪝</span>
                  useApiData.js
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  ApiDataHeader.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  LoadingSpinner.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  ComicsGrid.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  ComicCard.jsx
                </div>
                <div style={styles.fileItem}>
                  <span style={styles.fileIcon}>⚛️</span>
                  Pagination.jsx
                </div>
              </div>

              <div style={styles.folderItem}>
                <span style={styles.folderIcon}>📁</span>
                profile/, bitacora/, diagrams/
                <span style={styles.folderNote}>... más componentes</span>
              </div>
            </div>

            <div style={styles.folderItem}>
              <span style={styles.folderIcon}>📁</span>
              <strong>data/</strong>
            </div>
            <div style={styles.folderLevel}>
              <div style={styles.fileItem}>
                <span style={styles.fileIcon}>📊</span>
                antiheroes.json
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.legend}>
        <h3 style={styles.legendTitle}>Principios de Organización:</h3>
        <ul style={styles.legendList}>
          <li style={styles.legendItem}>
            <strong>containers/pages/:</strong> Componentes de página que
            orquestan la UI
          </li>
          <li style={styles.legendItem}>
            <strong>components/common/:</strong> Componentes compartidos entre
            múltiples páginas
          </li>
          <li style={styles.legendItem}>
            <strong>components/[feature]/:</strong> Componentes específicos
            agrupados por funcionalidad
          </li>
          <li style={styles.legendItem}>
            <strong>Custom Hooks:</strong> Lógica reutilizable extraída
            (useAntiHeroes, useApiData)
          </li>
          <li style={styles.legendItem}>
            <strong>Separación de datos:</strong> profilesData.js centraliza
            información de perfiles
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
  folderTree: {
    fontFamily: "monospace",
    fontSize: "14px",
    lineHeight: "1.8",
    minWidth: "250px",
  },
  folderLevel: {
    marginLeft: "5px",
    paddingLeft: "15px",
    borderLeft: "1px solid #666",
  },
  folderItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "5px 0",
    color: "#ff6666",
  },
  fileItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "5px 0",
    color: "#b0b0b0",
  },
  folderIcon: {
    fontSize: "16px",
  },
  fileIcon: {
    fontSize: "16px",
  },
  folderNote: {
    fontSize: "12px",
    color: "#666",
    fontStyle: "italic",
    marginLeft: "5px",
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
