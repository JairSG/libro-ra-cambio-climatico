# 🌍 Planeta en Riesgo — Libro Educativo con Realidad Aumentada

## Tema
**Cambio Climático**: impacto en los ecosistemas y estrategias de mitigación.

## Descripción
Libro educativo interactivo complementado con una aplicación web de Realidad Aumentada que permite visualizar modelos 3D, animaciones y recursos multimedia al enfocar marcadores con la cámara del dispositivo.

## Tecnologías
- **Frontend**: HTML5 + CSS3 + JavaScript
- **Motor 3D**: A-Frame 1.4.2
- **Geometrías**: Three.js (integrado en A-Frame)
- **Realidad Aumentada**: AR.js
- **Entorno**: GitHub Codespaces

## Ejecutar Localmente

```bash
npx --yes http-server public -p 8000
```

Abrir en navegador: `http://localhost:8000`

## Despliegue Web (GitHub Pages)

El proyecto está preparado para publicarse con **GitHub Pages** (HTTPS automático, obligatorio para acceso a cámara web en celulares y computadoras).
URL generada: `https://<tu-usuario>.github.io/<tu-repositorio>/`


## Estructura del Proyecto

```
public/
├── index.html          → Aplicación RA principal (5 páginas)
├── aframe.html         → Prototipo A-Frame
├── vista3d.html        → Vista 3D de validación
├── css/estilos.css     → Estilos de la interfaz
├── js/
│   ├── escena.js       → Componentes A-Frame personalizados
│   ├── objetos.js      → Geometrías Three.js
│   ├── libro.js        → Sistema de navegación de páginas
│   └── interacciones.js → Controles de usuario
└── assets/             → Modelos, marcadores, imágenes, audio, video
```

## Páginas del Libro

| Pág | Tema | Recurso RA |
|-----|------|------------|
| 1 | ¿Qué es el cambio climático? | 🌍 Tierra con gases |
| 2 | Causas principales | 🏭 Fábrica con humo |
| 3 | Consecuencias | 🧊 Iceberg derritiéndose |
| 4 | Impacto en ecosistemas | 🌳 Árbol con ciclo de vida |
| 5 | Soluciones y mitigación | ⚡ Turbina eólica |

## Controles
- **Selector de página**: Menú desplegable en la interfaz
- **Pausar/Continuar**: Botón o tecla `Espacio`
- **Cambiar página rápido**: Teclas `1` a `5`

## Marcador
Se utiliza el marcador **Hiro** de AR.js. Descargar e imprimir desde:
[https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png)

## Integrantes

- [ ] Nombre 1 — Coordinador
- [ ] Nombre 2 — Investigación
- [ ] Nombre 3 — Desarrollo
- [ ] Nombre 4 — RA/3D
- [ ] Nombre 5 — Diseño / QA

## Curso
Tecnologías Emergentes — USIL
