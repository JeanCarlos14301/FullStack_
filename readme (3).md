1.) npm create vite@latest spa-usta -- --template react
- Select a framework:
React
- Select a variant:
JavaScript
- Use Vite 8 beta (Experimental)?:
No
- Install with npm and start now?
Yes

2.) reemplazar los archivos:
- src/main.jsx
- src/App.jsx 
- src/index.css

3.) cd spa-usta
4.) npm run dev


# ESTRUCTURA DEL PROYECTO
spa-usta/
│
├── node_modules/          # Dependencias instaladas por npm
│
├── public/                # Archivos estáticos (se sirven tal cual)
│
├── src/                   # Código fuente principal de la aplicación
│   │
│   ├── assets/            # Recursos estáticos (imágenes, íconos, etc.)
│   │
│   ├── App.jsx            # Componente principal (lógica global + vistas SPA)
│   │
│   ├── App.css            # Estilos específicos del componente App
│   │
│   ├── index.css          # Estilos globales del proyecto
│   │
│   └── main.jsx           # Punto de entrada de React (renderiza <App />)
│
├── .gitignore             # Archivos/carpetas que Git no debe versionar
│
├── eslint.config.js       # Configuración de reglas de calidad de código
│
├── index.html             # Único HTML base (SPA entry point)
│
├── package.json           # Configuración del proyecto + scripts + dependencias
│
├── package-lock.json      # Versionado exacto de dependencias
│
├── vite.config.js         # Configuración del bundler Vite
│
└── README.md              # Documentación del proyecto


# Flujo Interno de una SPA

index.html
   ↓
main.jsx
   ↓
<App />
   ↓
Cambio de estado (useState)
   ↓
React re-renderiza solo lo necesario


# Arquitectura Simplificada (CAPAS)
| Capa              | Función                      |
| ----------------- | ---------------------------- |
| index.html        | Contenedor raíz              |
| main.jsx          | Inicializa React             |
| App.jsx           | Controla estado y navegación |
| Componentes hijos | Renderizan vistas            |
| localStorage      | Persistencia en navegador    |
| Vite              | Compilación y servidor       |

# Lo Técnico
- Framework: React
- Bundler: Vite
- Tipo: Single Page Application
- Persistencia: localStorage
- Renderizado: Virtual DOM
- Estado: useState
- Optimización: useMemo
- Efectos: useEffect

# Hooks usados
- useState   → estado (view, rooms, bookings, filtros)
- useEffect  → persistencia localStorage
- useMemo    → optimización de filtros y KPIs








# RESUMEN DEL PROYECTO: 

| Sección                         | Contenido                                                  | Propósito                                                                |
| ------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Importaciones**               | `useState`, `useEffect`, `useMemo`                         | Manejo de estado, persistencia automática y datos derivados optimizados. |
| **Cabecera descriptiva**        | Comentario general del módulo                              | Documenta el alcance del SPA y sus 5 vistas.                             |
| **LS_KEYS**                     | Claves `rooms` y `bookings`                                | Define las claves usadas en `localStorage`.                              |
| **SEDES**                       | Relación Sede → Edificios                                  | Regla de negocio para validar asociación correcta.                       |
| **Funciones utilitarias**       | `uid`, `loadLS`, `saveLS`, `todayISO`, `prettyDate`, etc.  | Soporte para persistencia, fechas y generación de identificadores.       |
| **DEFAULT_ROOMS**               | Datos iniciales de salas                                   | Valores base si no existen datos almacenados.                            |
| **Estado principal (`App`)**    | `view`, `rooms`, `bookings`, `toast`                       | Control de navegación SPA, datos y notificaciones.                       |
| **Persistencia automática**     | `useEffect` sobre `rooms` y `bookings`                     | Guarda cambios automáticamente en `localStorage`.                        |
| **Datos derivados (`useMemo`)** | `activeRooms`, `upcomingBookings`, `stats`                 | Optimiza cálculos de KPIs y filtros.                                     |
| **Notificaciones**              | `notify()`                                                 | Muestra mensajes temporales tipo toast.                                  |
| **Reglas de negocio**           | `overlaps()`                                               | Evita conflictos de horario en reservas.                                 |
| **Casos de uso: Reservas**      | `createBooking()`, `cancelBooking()`                       | Crear y cancelar reservas con validaciones.                              |
| **Casos de uso: Salas**         | `addRoom()`, `toggleRoom()`                                | Crear y activar/desactivar salas.                                        |
| **Mantenimiento**               | `resetAll()`, `exportJSON()`, `importJSON()`               | Reinicio y respaldo/restore en formato JSON.                             |
| **Render principal**            | `header`, `nav`, `main`, `footer`                          | Estructura visual y navegación condicional por vista.                    |
| **Componentes hijos**           | `ReserveView`, `MyBookingsView`, `RoomsView`, `ConfigView` | Separación de responsabilidades por pantalla.                            |
| **Filtros en Mis reservas**     | `q`, `onlyActive`                                          | Búsqueda dinámica y opción “Solo confirmadas”.                           |



# __________________________________________________5 de marzo de 2026__________________________________________________

# ------proyecto lockers jsx react ------

1.) npm create vite@latest spa-lockers -- --template react
- Select a framework:
React
- Select a variant:
JavaScript
- Use Vite 8 beta (Experimental)?:
No
- Install with npm and start now?
Yes

2.) reemplazar los archivos:
- src/main.jsx
- src/App.jsx 
- src/index.css

3.) cd spa-lockers
4.) npm run dev


# ------------------- proyecto lockers tsx react -------------------
1.) npm create vite@latest lockers-tsx -- --template react-ts
- Select a framework:
→ React
- Select a variant:
→ TypeScript
- Use Vite 8 beta (Experimental)?
→ No
- Install with npm and start now?
→ Yes


2.) reemplazar los archivos:
- src/main.tsx
- src/App.tsx
- src/index.css
3.) cd lockers-tsx

4.) npm run dev


# -------------- 10 de marzo PROYECTO COMPONENTES [CBA]------------

>>> PROYECTO: spa-votacion-fullstack

1.) npm create vite@latest spa-votacion-fullstack -- --template react
- Select a framework:
React
- Select a variant:
JavaScript
- Use Vite 8 beta (Experimental)?:
No
- Install with npm and start now?
Yes

2.) Estructura del proyecto (archivos a importar/reemplazar):

spa-votacion-fullstack
│
├── node_modules/                # Dependencias instaladas por npm
│
├── public/                      # Archivos públicos accesibles directamente
│
├── src/                         # Código fuente principal de la aplicación
│
│   ├── assets/                  # Recursos gráficos del proyecto
│   │   └── react.svg            # Logo o recurso gráfico utilizado en la interfaz
│   │
│   ├── components/              # Componentes reutilizables de la interfaz
│   │   ├── CandidateForm.jsx       # Formulario para registrar o editar candidatos
│   │   ├── CandidateItem.jsx       # Representa visualmente un candidato individual dentro de una lista o tarjeta
│   │   ├── CandidateList.jsx       # Componente que recorre y renderiza la lista de candidatos
│   │   ├── SummaryCards.jsx        # Tarjetas de resumen usadas en el dashboard para mostrar indicadores
│   │   ├── Toast.jsx               # Componente de notificaciones emergentes para mensajes del sistema
│   │   └── Topbar.jsx              # Barra superior de navegación de la aplicación
│   │
│   ├── data/                    # Datos iniciales o de configuración
│   │   └── initialCandidates.js    # Archivo con candidatos iniciales para cargar datos de prueba o estado inicial
│   │
│   ├── utils/                   # Funciones utilitarias de apoyo
│   │   ├── exportCsv.js            # Función que permite exportar la información de candidatos a archivo CSV
│   │   ├── exportJson.js           # Función que permite exportar los datos de la aplicación en formato JSON
│   │   ├── importJson.js           # Función que permite importar datos desde un archivo JSON
│   │   └── localStorage.js         # Funciones para guardar y recuperar datos del navegador mediante localStorage
│   │
│   ├── views/                   # Vistas o pantallas principales de la aplicación
│   │   ├── BackupView.jsx             # Vista para gestionar respaldos, exportación e importación de datos
│   │   ├── CandidatesView.jsx         # Vista para listar, editar o eliminar candidatos registrados
│   │   ├── DashboardView.jsx          # Vista principal que muestra indicadores y resumen del sistema
│   │   ├── RegisterCandidateView.jsx  # Vista que contiene el formulario para registrar nuevos candidatos
│   │   └── VotingView.jsx             # Vista donde los usuarios pueden emitir votos por los candidatos
│   │
│   ├── App.css                  # Estilos principales del componente App
│   ├── App.jsx                  # Componente raíz que coordina vistas, estado global y navegación
│   ├── index.css                # Estilos globales aplicados a toda la aplicación
│   └── main.jsx                 # Punto de entrada de React que monta la aplicación en el DOM
│
├── .gitignore                   # Archivos ignorados por Git
├── eslint.config.js             # Configuración del linter ESLint para control de calidad del código
├── index.html                   # Página HTML base donde se monta la aplicación React
├── package-lock.json            # Registro exacto de versiones de dependencias instaladas
├── package.json                 # Configuración del proyecto, dependencias y scripts de npm
├── README.md                    # Documentación del proyecto
└── vite.config.js               # Configuración del entorno de desarrollo con Vite

2.1) crear/importar las carpetas (con los archivos) dentro del src:
- components
- data
- utils
- views
2.2) reemplazar el contenido de los archivos:
- App.jsx
- index.css
- main.jsx

3.) cd spa-votacion-fullstack
4.) npm run dev
