# Grupo 3 - Proyecto SPA en React (Evolución del TP1)

[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.9-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)

## 📖 Descripción del Proyecto

Este repositorio documenta la evolución de nuestro proyecto del TP1. Hemos migrado el sitio web estático original (HTML, CSS, JS) a una moderna **Single Page Application (SPA)** construida con **React 19** y **Vite**.

La nueva aplicación conserva la esencia del proyecto original —presentar a nuestro equipo y documentar el proceso— pero lo reconstruye sobre una arquitectura de componentes, ofreciendo una experiencia de usuario más fluida y dinámica.

## 🚀 Demo en Vivo

➡️ **[Ver Aplicación Desplegada](https://tu-app.vercel.app)** _(Próximamente en Vercel)_

## 🔄 Evolución Tecnológica: TP1 → TP2

El salto tecnológico del TP1 al TP2 ha sido el núcleo de este trabajo.

| Característica | ⏪ Antes (TP1) | ⏩ Ahora (TP2) |
| :--- | :--- | :--- |
| **Arquitectura** | Sitio Multi-Página (MPA) | **Single Page Application (SPA)** |
| **Librería Principal** | JavaScript "vanilla" | **React 19** |
| **Build Tool** | N/A | **Vite 7** |
| **Navegación** | Múltiples archivos `.html` | **React Router DOM 7** |
| **Estilos** | CSS Global con BEM | **CSS-in-JS** (Estilos por componente) |
| **Manejo de Datos** | Datos embebidos en HTML | **JSON local + API externa (TVMaze)** |

## ✨ Características Principales

- 🔄 **Navegación SPA:** Transiciones instantáneas entre secciones sin recargar la página
- 🎭 **Galería desde JSON:** Sección de "Anti-Héroes" con búsqueda y filtrado en tiempo real
- 📺 **Consumo de API:** Integración con TVMaze API para mostrar series con paginación del lado del cliente
- 👤 **Perfiles Dinámicos:** Rutas paramétricas (`/profile/:id`) con diseños personalizados por miembro
- 🎨 **Componentes Reutilizables:** Arquitectura modular con separación de responsabilidades
- 📱 **Responsive Design:** Adaptación a diferentes tamaños de pantalla con custom hooks

## 📁 Estructura del Proyecto

```
frontend-tp-02/
├── public/                   # Archivos estáticos
│   ├── logo.ico              # Favicon
│   └── [german|juan|manuel|nicolas]/  # Assets por miembro
│
├── src/
│   ├── components/           # Componentes UI organizados por funcionalidad
│   │   ├── api-data/         # Componentes para consumo de API
│   │   ├── antiheroes/       # Galería desde JSON local
│   │   ├── bitacora/         # Documentación del proceso
│   │   ├── diagrams/         # Diagramas de arquitectura
│   │   ├── home/             # Página de inicio
│   │   ├── navigation/       # Sidebar y Footer
│   │   └── profile/          # Perfiles personalizados por miembro
│   │
│   ├── containers/pages/     # Componentes de página
│   ├── data/                 # Datos estáticos (JSON + configuración)
│   ├── hooks/                # Custom Hooks (MediaQuery)
│   ├── layout/               # Estructura principal de la UI
│   ├── router/               # Configuración de rutas
│   └── styles/               # Estilos globales
│
├── App.jsx                   # Componente raíz
├── main.jsx                  # Punto de entrada
└── package.json              # Dependencias y scripts
```

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework:** React 19.1
- **Build Tool:** Vite 7.1
- **Routing:** React Router DOM 7.9
- **Styling:** CSS-in-JS
- **Linting:** ESLint 9
- **API Externa:** [TVMaze API](https://www.tvmaze.com/api)

## ⚙️ Instalación y Ejecución

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Pasos

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/juandualibe/frontend-tp-02.git
   ```

2. **Navega a la carpeta del proyecto:**
   ```bash
   cd frontend-tp-02
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)

### Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera el build de producción
npm run preview  # Preview del build de producción
npm run lint     # Ejecuta el linter
```

## 📦 Despliegue

El proyecto está optimizado para desplegarse en plataformas como:

- **Vercel** (recomendado para React)
- **Netlify**
- **GitHub Pages**

## 👥 Equipo de Desarrollo

| Miembro | Rol | Perfil |
|---------|-----|--------|
| **Germán** | Full Stack Developer | `/profile/german` |
| **Juan** | Full Stack Developer | `/profile/juan` |
| **Manuel** | Backend Developer | `/profile/manuel` |
| **Nicolás** | Project Manager | `/profile/nicolas` |

## 📚 Documentación Adicional

- [Guía de Perfiles Personalizados](src/components/profile/README.md)
- [Ejemplo: Perfil de Germán](src/components/profile/german/README.md)

## 🤝 Contribución

Cada miembro del equipo tiene total libertad para personalizar su perfil en la carpeta `src/components/profile/[nombre]/`:

- `*Data.js`: Información personal
- `*Styles.js`: Estilos personalizados
- `*Profile.jsx`: Estructura del componente

## 📝 Notas del Proyecto

Este proyecto fue desarrollado como parte del **Trabajo Práctico N°2** de la materia Frontend, demostrando:

- Migración de aplicación estática a SPA con React
- Implementación de arquitectura basada en componentes
- Consumo de APIs REST
- Manejo de estado y routing
- Buenas prácticas de desarrollo frontend moderno

## 📄 Licencia

Este proyecto es parte de un trabajo académico.

---

_Desarrollado con ❤️ por el Grupo 3 - 2025_