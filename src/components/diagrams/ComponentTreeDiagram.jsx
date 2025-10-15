export default function ComponentTreeDiagram() {
  return (
    <div style={styles.diagramContainer}>
      <h2 style={styles.diagramTitle}>Árbol de Renderizado (Jerarquía de Componentes)</h2>
      <p style={styles.diagramDescription}>
        Este diagrama muestra la arquitectura real de la SPA. El componente `Layout` actúa como un contenedor para todas las páginas, renderizando el `Sidebar` y el `Footer` de forma persistente.
      </p>

      <div style={styles.diagram}>
        <div style={styles.treeNode}>
          {/* Nivel Raíz */}
          <div style={styles.nodeBox}><strong>App.jsx</strong> <span style={styles.nodeFile}>src/App.jsx</span></div>

          {/* Nivel Router */}
          <div style={styles.children}>
            <div style={styles.nodeBox}><strong>AppRouter.jsx</strong> <span style={styles.nodeFile}>src/router/AppRouter.jsx</span></div>
            
            {/* Nivel Layout */}
            <div style={styles.children}>
              <div style={styles.nodeBox}><strong>Layout.jsx</strong> <span style={styles.nodeFile}>src/layout/layout.jsx</span></div>
              
              {/* Hijos de Layout */}
              <div style={styles.subChildren}>
                <div style={styles.nodeBox}><strong>Sidebar</strong> <span style={styles.nodeFile}>components/navigation/Sidebar.jsx</span></div>
                <div style={styles.nodeBox}><strong>Footer</strong> <span style={styles.nodeFile}>components/navigation/Footer.jsx</span></div>
                <div style={styles.nodeBox}><strong>Outlet (Página Activa)</strong> <span style={styles.folderNote}>Contenedor de las páginas</span></div>
                
                {/* Ramas de Páginas */}
                <div style={styles.children}>
                  {/* Branch: HomePage */}
                  <div style={styles.branch}>
                    <div style={styles.nodeBox}><strong>HomePage</strong> <span style={styles.nodeRoute}>Ruta: /</span></div>
                    <div style={styles.subChildren}>
                      <div style={styles.nodeBox}>HeroSection</div>
                      <div style={styles.nodeBox}>TeamSection → (TeamCard)</div>
                    </div>
                  </div>

                  {/* Branch: AntiHeroesPage */}
                  <div style={styles.branch}>
                    <div style={styles.nodeBox}><strong>AntiHeroesPage</strong> <span style={styles.nodeRoute}>Ruta: /antiheroes</span></div>
                    <div style={styles.subChildren}>
                      <div style={styles.nodeBox}>AntiHeroesHeader</div>
                      <div style={styles.nodeBox}>AntiHeroesControls → (SearchBar, UniverseFilter)</div>
                      <div style={styles.nodeBox}>AntiHeroesGrid → (AntiHeroCard)</div>
                    </div>
                  </div>

                  {/* Branch: ApiDataPage */}
                  <div style={styles.branch}>
                    <div style={styles.nodeBox}><strong>ApiDataPage</strong> <span style={styles.nodeRoute}>Ruta: /api-data</span></div>
                     <div style={styles.subChildren}>
                      <div style={styles.nodeBox}>ApiDataHeader</div>
                      <div style={styles.nodeBox}>ApiDataContent → (ComicsGrid → (ComicCard), Pagination)</div>
                    </div>
                  </div>
                  
                  {/* Branch: ProfilePage */}
                  <div style={styles.branch}>
                    <div style={styles.nodeBox}><strong>ProfilePage</strong> <span style={styles.nodeRoute}>Ruta: /profile/:id</span></div>
                    <div style={styles.subChildren}>
                      <div style={styles.nodeBox}>(ManuelProfile, JuanProfile, etc.)</div>
                    </div>
                  </div>
                   {/* ... (Puedes agregar las otras páginas si quieres) ... */}
                </div>
              </div>
            </div>
          </div>
        </div>
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
