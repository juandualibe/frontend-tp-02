# 🎨 Sistema de Perfiles Personalizados

## 📚 Documentación para el equipo

Este proyecto ahora utiliza un sistema de perfiles individuales donde cada miembro puede personalizar su perfil sin afectar a los demás.

## 🗂️ Estructura actual

```
src/components/profile/
├── _template/              ← Template base para copiar
│   ├── TemplateProfile.jsx
│   ├── templateData.js
│   ├── templateStyles.js
│   └── README.md
│
├── manuel/                 ← Perfil personalizado de Manuel ✅
│   ├── ManuelProfile.jsx
│   ├── manuelData.js
│   ├── manuelStyles.js
│   └── README.md
│
├── juan/                   ← Crear cuando Juan quiera personalizar
├── german/                 ← Crear cuando Germán quiera personalizar
├── nicolas/                ← Crear cuando Nicolás quiera personalizar
│
├── ProfileHeader.jsx       ← Componentes genéricos (usados por defecto)
├── ProfileInfo.jsx
├── ProfileSections.jsx
└── profilesData.js
```

## 🚀 Cómo crear tu perfil personalizado

### Opción 1: Usar el template (Recomendado)

1. **Copia la carpeta `_template`**
   ```bash
   src/components/profile/_template → src/components/profile/tunombre
   ```

2. **Renombra los archivos**
   - `TemplateProfile.jsx` → `TuNombreProfile.jsx`
   - `templateData.js` → `tuNombreData.js`
   - `templateStyles.js` → `tuNombreStyles.js`

3. **Reemplaza en el código**
   - Buscar: `template` / `Template`
   - Reemplazar: `tunombre` / `TuNombre`

4. **Registra tu perfil en el router**
   
   Edita `src/containers/pages/ProfilePage.jsx`:
   ```javascript
   import TuNombreProfile from "../../components/profile/tunombre/TuNombreProfile";
   
   // Agrega dentro de la función ProfilePage:
   if (memberId === 'tunombre') {
     return <TuNombreProfile />;
   }
   ```

5. **Personaliza tu contenido**
   - Edita `tuNombreData.js` con tu información
   - Modifica `tuNombreStyles.js` con tus colores/diseño
   - Agrega funcionalidad en `TuNombreProfile.jsx`

### Opción 2: Copiar el perfil de Manuel

Si te gusta el estilo de Manuel, copia su carpeta y modifícala:

```bash
src/components/profile/manuel → src/components/profile/tunombre
```

Luego reemplaza todo "manuel"/"Manuel" por tu nombre.

## 🎯 Ventajas del sistema

✅ **Libertad creativa** - Cada uno diseña su perfil como quiera
✅ **Sin conflictos** - Trabajas en tu carpeta sin afectar a otros
✅ **Fácil en Git** - Commits separados, cero merge conflicts
✅ **Experimentación segura** - Prueba sin romper nada
✅ **Aprendizaje** - Cada uno puede explorar diferentes técnicas

## 📁 Archivos por carpeta

### `TuNombreProfile.jsx`
- Componente React principal
- Estructura HTML de tu perfil
- Lógica e interactividad

### `tuNombreData.js`
- Tus datos personales
- Biografía, skills, películas, música
- Fácil de actualizar

### `tuNombreStyles.js`
- Todos tus estilos CSS (en JavaScript)
- Colores, fuentes, espaciados
- Efectos y animaciones

## 🎨 Ideas de personalización

### Temáticas
- 🎬 Películas favoritas (Matrix, Marvel, etc.)
- 🎮 Videojuegos (Cyberpunk, Zelda, etc.)
- 🎵 Bandas musicales (Rock, EDM, etc.)
- 🚀 Sci-fi / Futurista
- 🌈 Colores favoritos

### Funcionalidades
- Animaciones al scroll
- Efectos hover en elementos
- Modales con información adicional
- Carruseles de imágenes
- Gráficos de habilidades
- Timeline de experiencia
- Galería de proyectos

### Estilos
- Dark mode / Light mode
- Glassmorphism
- Neomorphism
- Gradientes animados
- Efectos de partículas

## 🤝 Flujo de trabajo en equipo

1. **Cada miembro trabaja en su carpeta**
2. **Commits separados por persona**
3. **Pull requests independientes**
4. **Sin conflictos de merge** 🎉

## 📝 Notas importantes

- Las imágenes van en la carpeta `public/`
- Puedes crear subcarpetas dentro de tu perfil si necesitas organización
- El perfil genérico sigue funcionando para quien no quiera personalizar
- Puedes usar cualquier librería de React que quieras

## 🆘 ¿Necesitas ayuda?

- Lee el `README.md` dentro de la carpeta `_template`
- Revisa el código de Manuel como ejemplo
- Pregunta al equipo en el grupo
- Experimenta y diviértete 🎉

## 📊 Estado actual

- ✅ Manuel - Perfil personalizado creado
- ⏳ Juan - Puede usar template
- ⏳ Germán - Puede usar template  
- ⏳ Nicolás - Puede usar template

---

**¡Que comience la creatividad!** 🚀✨
