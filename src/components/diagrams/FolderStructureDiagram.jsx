// src/components/diagrams/FolderStructureDiagram.jsx

export default function FolderStructureDiagram() {
  return (
    <div style={styles.diagramContainer}>
      <h2 style={styles.diagramTitle}>Organización de Carpetas</h2>
      <p style={styles.diagramDescription}>
        Esta es la estructura de carpetas real del proyecto, organizada por funcionalidad para facilitar el mantenimiento y la escalabilidad.
      </p>

      <div style={styles.diagram}>
        <div style={styles.folderTree}>
          {/* Root Level */}
          <div style={styles.folderItem}><strong>📁 frontend-tp-02/</strong></div>

          {/* public Folder */}
          <div style={styles.folderLevel}>
            <div style={styles.folderItem}>
              <span style={styles.folderIcon}>📁</span>
              <strong>public/</strong>
              <span style={styles.folderNote}>Archivos estáticos y assets</span>
            </div>
            <div style={styles.folderLevel}>
              <div style={styles.fileItem}><span style={styles.fileIcon}>🖼️</span> logo.ico</div>
              <div style={styles.fileItem}><span style={styles.fileIcon}>📁</span> /german, /juan, /manuel, /nicolas</div>
            </div>

            {/* src Folder */}
            <div style={styles.folderItem}>
              <span style={styles.folderIcon}>📁</span>
              <strong>src/</strong>
              <span style={styles.folderNote}>Código fuente de la aplicación</span>
            </div>
            <div style={styles.folderLevel}>
              <div style={styles.fileItem}><span style={styles.fileIcon}>⚛️</span> App.jsx <span style={styles.folderNote}>Componente raíz</span></div>
              <div style={styles.fileItem}><span style={styles.fileIcon}>🚀</span> main.jsx <span style={styles.folderNote}>Punto de entrada</span></div>
              
              <div style={styles.folderItem}><span style={styles.folderIcon}>📁</span> <strong>components/</strong> <span style={styles.folderNote}>Componentes reutilizables</span></div>
                <div style={styles.folderLevel}>
                    <div style={styles.fileItem}><span style={styles.fileIcon}>📁</span> /api-data/, /antiheroes/, /bitacora/, /diagrams/, /home/, /navigation/, /profile/</div>
                </div>

              <div style={styles.folderItem}><span style={styles.folderIcon}>📁</span> <strong>containers/pages/</strong> <span style={styles.folderNote}>Componentes de página</span></div>
              <div style={styles.folderItem}><span style={styles.folderIcon}>📁</span> <strong>data/</strong> <span style={styles.folderNote}>Datos locales (JSON)</span></div>
              <div style={styles.folderItem}><span style={styles.folderIcon}>📁</span> <strong>hooks/</strong> <span style={styles.folderNote}>Custom Hooks</span></div>
              <div style={styles.folderItem}><span style={styles.folderIcon}>📁</span> <strong>layout/</strong> <span style={styles.folderNote}>Estructura principal (Layout)</span></div>
              <div style={styles.folderItem}><span style={styles.folderIcon}>📁</span> <strong>router/</strong> <span style={styles.folderNote}>Configuración de rutas</span></div>
              <div style={styles.folderItem}><span style={styles.folderIcon}>📁</span> <strong>styles/</strong> <span style={styles.folderNote}>Estilos globales</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ... (los 'styles' pueden quedar igual que los tenías)

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
