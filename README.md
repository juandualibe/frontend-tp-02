# Grupo 3 - Proyecto SPA en React (Evolución del TP1)

## Descripción del Proyecto

Este repositorio documenta la evolución de nuestro proyecto del TP1. Hemos migrado el sitio web estático original (HTML, CSS, JS) a una moderna **Single Page Application (SPA)** construida con **React** y **Vite**.

La nueva aplicación conserva la esencia del proyecto original —presentar a nuestro equipo y documentar el proceso— pero lo reconstruye sobre una arquitectura de componentes, ofreciendo una experiencia de usuario más rápida, fluida y dinámica.



## 🔄 De Tecnologías a Stack Tecnológico

El salto tecnológico del TP1 al TP2 ha sido el núcleo de este trabajo.

| Característica | ⏪ Antes (TP1) | ⏩ Ahora (TP2) |
| :--- | :--- | :--- |
| **Arquitectura** | Sitio Multi-Página (MPA) | **Single Page Application (SPA)** |
| **Librería Principal** | N/A (JavaScript "vanilla") | **React 18** |
| **Herramientas** | N/A | **Vite** |
| **Navegación** | Múltiples archivos `.html` | **React Router DOM** |
| **Estilos** | CSS Global con BEM | **CSS-in-JS** (Estilos por componente) |
| **Manejo de Datos** | Datos en el HTML | **JSON local y consumo de API externa** |

## 📁 Nueva Estructura de Archivos

La arquitectura del proyecto fue completamente rediseñada para el ecosistema de React, favoreciendo la modularidad y una clara separación de responsabilidades.

```
frontendtp02/
├── public/                   # Archivos estáticos servidos directamente
│   ├── logo.ico              # Favicon de la aplicación
│   ├── german/               # Assets del perfil de Germán
│   ├── juan/                 # Assets del perfil de Juan
│   ├── manuel/               # Assets del perfil de Manuel
│   └── nicolas/              # Assets del perfil de Nicolás
│
├── src/                      # Código fuente de la aplicación React
│   ├── components/           # Componentes de UI reutilizables, organizados por funcionalidad
│   │   ├── api-data/         # Componentes para la sección de la API (Header, Grid, Card, Pagination...)
│   │   ├── antiheroes/       # Componentes para la galería JSON (Header, Grid, Card, Controls...)
│   │   ├── bitacora/         # Componentes para la sección Bitácora
│   │   ├── diagrams/         # Componentes para los diagramas de arquitectura
│   │   ├── home/             # Componentes para la página de inicio (Hero, TeamSection, TeamCard)
│   │   ├── navigation/       # Componentes de navegación global (Sidebar, Footer)
│   │   └── profile/          # Componentes de los perfiles individuales, con subcarpetas por miembro
│   │
│   ├── containers/
│   │   └── pages/            # Componentes que actúan como páginas completas para cada ruta
│   │       ├── HomePage.jsx
│   │       ├── AntiHeroesPage.jsx
│   │       ├── ApiDataPage.jsx
│   │       ├── BitacoraPage.jsx
│   │       ├── DiagramsPage.jsx
│   │       └── ProfilePage.jsx
│   │
│   ├── data/                 # Datos estáticos de la aplicación
│   │   ├── antiheroes.json   # Base de datos local para la galería de anti-héroes
│   │   └── navigation.js     # Define los enlaces del Sidebar
│   │
│   ├── hooks/                # Custom Hooks con lógica de estado reutilizable
│   │   └── MediaQuery.js     # Hook para detectar cambios en el tamaño de la pantalla
│   │
│   ├── layout/               # Componente de estructura principal de la UI
│   │   └── layout.jsx        # Define la estructura con Sidebar, contenido principal y Footer
│   │
│   ├── router/               # Configuración del enrutamiento de la SPA
│   │   └── AppRouter.jsx     # Define todas las rutas de la aplicación con React Router
│   │
│   ├── styles/               # Archivos de estilos globales
│   │   └── global.css        # CSS reset y estilos base para toda la app
│
├── App.jsx                   # Componente raíz que renderiza el router
├── index.css                 # Estilos iniciales para el #root
└── main.jsx                  # Punto de entrada de la aplicación, donde React se monta en el DOM
```

## ✨ Características Destacadas del TP2

En lugar de funciones de JavaScript aisladas, la nueva aplicación se basa en un sistema de componentes y estado que permite funcionalidades más complejas:

-   **Navegación SPA:** Transiciones instantáneas entre secciones sin recargar la página.
-   **Galería desde JSON:** Una sección de "Anti-Héroes" que renderiza una lista desde un archivo `JSON` local, con **búsqueda y filtro** en tiempo real.
-   **Galería desde API:** Una sección de "Series" que consume datos en vivo de la **API de TVMaze**, manejando estados de carga y errores, e implementando **paginación del lado del cliente**.
-   **Perfiles Dinámicos y Personalizados:** Los perfiles de los miembros ahora se cargan a través de rutas dinámicas (`/profile/:id`), cada uno con su propia estructura, datos y estilos encapsulados.
-   **Componentes Reutilizables:** Elementos como el `Sidebar`, `Footer` y las tarjetas se definen una sola vez y se utilizan en múltiples lugares.

## ⚙️ Cómo Ejecutar el Proyecto

Para correr este proyecto en tu entorno local, seguí estos pasos:

1.  **Cloná el repositorio:**
    ```bash
    git clone [https://github.com/juandualibe/frontend-tp-02.git](https://github.com/juandualibe/frontend-tp-02.git)
    ```

2.  **Navegá a la carpeta del proyecto:**
    ```bash
    cd frontend-tp-02
    ```

3.  **Instalá las dependencias:**
    ```bash
    npm install
    ```

4.  **Iniciá el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

    La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

## 🔗 Enlace al Proyecto Desplegado

La aplicación está desplegada en Vercel y se puede visitar en el siguiente enlace:

➡️ **Despues ponemos la de vercel**

## 👥 Integrantes del Equipo

-   **Germán** - Full Stack Developer
-   **Juan** - Full Stack Developer
-   **Manuel** - Backend Developer
-   **Nicolás** - Project Manager

---
_Este `README` ha sido actualizado para reflejar la migración del proyecto a React, cumpliendo con los requisitos del Trabajo Práctico N°2._

