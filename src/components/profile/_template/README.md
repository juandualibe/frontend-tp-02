# Template para Crear tu Perfil Personalizado

## 🎯 Cómo usar este template

### Paso 1: Copiar la carpeta
1. Copia toda la carpeta `_template`
2. Renómbrala con tu nombre (ej: `juan`, `german`, `nicolas`)
3. Colócala en `src/components/profile/tunombre/`

### Paso 2: Renombrar archivos
Cambia los nombres de archivo según tu nombre:
- `TemplateProfile.jsx` → `TuNombreProfile.jsx`
- `templateData.js` → `tuNombreData.js`
- `templateStyles.js` → `tuNombreStyles.js`

### Paso 3: Modificar el código
Busca y reemplaza en todos los archivos:
- `Template` → `TuNombre` (con mayúscula inicial)
- `template` → `tunombre` (todo en minúsculas)

### Paso 4: Personalizar contenido
Edita tus datos, estilos y funcionalidad según tus preferencias.

### Paso 5: Registrar en el router
En `src/containers/pages/ProfilePage.jsx`, agrega:

```javascript
import TuNombreProfile from "../../components/profile/tunombre/TuNombreProfile";

// Dentro de ProfilePage:
if (memberId === 'tunombre') {
  return <TuNombreProfile />;
}
```

## 📁 Estructura de archivos del template

```
_template/
├── TemplateProfile.jsx    - Componente principal
├── templateData.js        - Datos del perfil
├── templateStyles.js      - Estilos personalizados
└── README.md              - Esta guía
```

## 💡 Ejemplos de personalización

### Cambiar colores
En `templateStyles.js`, modifica los colores principales:
```javascript
color: "#ff0000",  // Cambia a tu color favorito
background: "linear-gradient(...)", // Tu gradiente
```

### Agregar sección nueva
En `TemplateProfile.jsx`, agrega después de las secciones existentes:
```javascript
<section style={styles.nuevaSeccion}>
  <h2>Mi Nueva Sección</h2>
  <p>Contenido personalizado</p>
</section>
```

### Cambiar layout
Modifica la estructura HTML en `TemplateProfile.jsx` como prefieras.

## 🚀 ¡Empieza a crear tu perfil único!

No tengas miedo de experimentar. Esta es tu carpeta personal y no afectará a nadie más.

¿Dudas? Pregunta a tus compañeros del equipo. 😊
