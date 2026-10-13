# Plan detallado por fases
## Libro educativo interactivo con Realidad Aumentada

### Objetivo general del proyecto

Desarrollar un libro educativo físico o digital acompañado por una aplicación web de realidad aumentada que permita visualizar modelos 3D, animaciones y otros recursos multimedia mediante la cámara de un dispositivo.

La arquitectura tecnológica base será:

```text
LIBRO EDUCATIVO
      │
      ├── Contenido educativo
      ├── Imágenes y gráficos
      ├── Preguntas
      ├── Marcador RA
      └── QR de acceso
              │
              ▼
       APLICACIÓN WEB
              │
       HTML + CSS + JS
              │
         ┌────┴─────┐
         │          │
      A-Frame    Three.js
         │          │
         └────┬─────┘
              │
            AR.js
              │
         Cámara/WebGL
              │
              ▼
      CONTENIDO AUMENTADO
```

La meta técnica es disponer de una página HTTPS capaz de utilizar la cámara del dispositivo, reconocer un marcador y situar contenido aumentado sobre el libro.

---

# FASE 0. Organización inicial del proyecto

## Objetivo

Definir cómo se trabajará antes de comenzar a investigar o programar.

La actividad se realiza en equipo y todos los integrantes deben comprender el código y participar en la demostración. Además, se debe ejecutar y comprobar cada etapa antes de avanzar.

## Actividades

Definir:

| Elemento | Decisión |
|---|---|
| Nombre del proyecto | Pendiente |
| Tema | Salud o ambiente |
| Tipo de libro | Digital, físico o ambos |
| Número mínimo de páginas | 5 páginas de contenido |
| Tecnología RA | AR.js |
| Motor 3D | A-Frame + Three.js |
| Desarrollo | HTML, CSS y JavaScript |
| Entorno | GitHub Codespaces |
| Repositorio | GitHub |
| Dispositivo de prueba | Smartphone |
| Navegador | Chrome u otro compatible con WebGL |
| Producto final | Libro + aplicación + presentación + informe |

## Organización del equipo recomendada

Aunque todos deben comprender todo el proyecto, pueden asignarse responsables principales:

| Rol | Función |
|---|---|
| Coordinador | Control de avance y entregables |
| Investigación | Fuentes, estadísticas y contenido |
| Desarrollo | HTML, JavaScript, A-Frame, Three.js |
| RA/3D | Marcadores, modelos y animaciones |
| Diseño | Libro, interfaz, imágenes y PPT |
| QA | Pruebas, evidencias y errores |

Si son menos integrantes, una persona puede asumir varios roles.

## Producto de la fase

Crear:

```text
PLAN_PROYECTO.md
```

con:

```text
Tema
Objetivo
Integrantes
Roles
Tecnologías
Entregables
Cronograma
```

## Criterio para pasar a la siguiente fase

El equipo conoce:

- qué va a construir;
- sobre qué tema;
- qué entregará;
- quién se encargará inicialmente de cada parte.

---

# FASE 1. Selección y delimitación del tema

La actividad permite desarrollar temas como:

- Enfermedades.
- Cambio climático.
- Contaminación ambiental.
- Alimentación saludable.
- Salud pública.

## Objetivo

Transformar un tema general en un proyecto educativo suficientemente específico.

No conviene escoger simplemente:

> Dengue

Es preferible delimitarlo como:

> Prevención del dengue en adolescentes mediante un libro educativo interactivo con realidad aumentada.

Otro ejemplo:

> Impacto de la contaminación por residuos plásticos y estrategias de reducción mediante realidad aumentada.

## Definir cinco elementos

### 1. Tema

Ejemplo:

```text
Dengue
```

### 2. Problema

```text
Falta de conocimiento sobre transmisión,
síntomas y prevención del dengue.
```

### 3. Público objetivo

Ejemplo:

```text
Estudiantes escolares o universitarios.
```

### 4. Objetivo educativo

Ejemplo:

> Explicar de manera visual e interactiva las causas, transmisión, síntomas y medidas de prevención del dengue utilizando un libro complementado con realidad aumentada.

### 5. Alcance

Definir qué sí abordará el libro y qué quedará fuera.

## Producto de la fase

Ficha de definición:

```text
Nombre:
Tema:
Problema:
Público:
Objetivo:
Alcance:
Tecnologías:
```

## Evidencia

Captura o documento con la decisión del tema.

---

# FASE 2. Investigación académica del contenido

## Objetivo

Construir la base informativa del proyecto antes de diseñar la RA.

La investigación debe incluir:

- descripción del problema;
- causas y consecuencias;
- estadísticas relevantes;
- prevención o solución;
- impacto social.

## Matriz recomendada

| Página | Tema | Información requerida | Evidencia | Fuente |
|---|---|---|---|---|
| 1 | Introducción | Definición | Texto | Fuente 1 |
| 2 | Causas | Factores principales | Imagen | Fuente 2 |
| 3 | Consecuencias | Efectos | Modelo 3D | Fuente 3 |
| 4 | Prevención | Medidas | Animación | Fuente 4 |
| 5 | Impacto | Estadísticas | Gráfico | Fuente 5 |

## Recomendación de fuentes

Dependiendo del tema:

```text
OMS
OPS
MINSA
CDC
UNEP
ONU
NASA
Artículos científicos
Organismos gubernamentales
```

La actividad exige citar las fuentes de información, imágenes y otros recursos empleados.

## Crear archivo

```text
docs/fuentes.md
```

Ejemplo:

```markdown
# Fuentes utilizadas

## Fuente 1
Organización:
Título:
Año:
URL:
Información utilizada:

## Fuente 2
...
```

## Producto

Contenido científico validado de las cinco páginas.

## Criterio de finalización

Ningún contenido importante del libro debería quedar sin fuente.

---

# FASE 3. Arquitectura educativa del libro

## Objetivo

Definir qué aparecerá en cada página antes de diseñarla.

La actividad exige:

- portada;
- índice;
- mínimo cinco páginas de contenido;
- imágenes, gráficos o ilustraciones.

La portada y el índice no cuentan dentro de las cinco páginas educativas.

## Estructura recomendada

```text
PORTADA
│
├── Nombre
├── Integrantes
├── Curso
├── QR
└── Imagen principal

ÍNDICE

PÁGINA 1
PÁGINA 2
PÁGINA 3
PÁGINA 4
PÁGINA 5

REFERENCIAS
CRÉDITOS
```

## Cada página debería tener

| Elemento | Obligación |
|---|---|
| Título | Sí |
| Texto educativo | Sí |
| Imagen | Sí |
| Fuente | Sí |
| Pregunta | Recomendado |
| Marcador RA | Sí |
| Recurso aumentado | Sí |
| Instrucción de uso | Sí |

## Ejemplo de planificación si se eligiera dengue

| Pág. | Contenido | RA |
|---|---|---|
| 1 | ¿Qué es el dengue? | Mosquito 3D |
| 2 | Transmisión | Animación mosquito-persona |
| 3 | Síntomas | Modelo humano interactivo |
| 4 | Prevención | Animación de eliminación de criaderos |
| 5 | Impacto | Datos y visualización interactiva |

## Producto

Crear:

```text
docs/storyboard_libro.md
```

---

# FASE 4. Diseño de la experiencia de Realidad Aumentada

## Objetivo

Definir qué hará la tecnología antes de programarla.

La actividad permite integrar:

- videos;
- modelos 3D;
- animaciones;
- audios;
- narraciones.

No significa que todas las páginas deban contener todos esos recursos.

## Matriz RA recomendada

| Página | Objeto | Tipo | Interacción | Archivo |
|---|---|---|---|---|
| P1 | Modelo principal | GLB | Rotación | modelo1.glb |
| P2 | Objeto | A-Frame | Animación | escena2.js |
| P3 | Modelo | GLB | Observación | modelo3.glb |
| P4 | Animación | Three.js | Pausa | escena4.js |
| P5 | Multimedia | Video | Play/Pause | video.mp4 |

## Regla

Cada recurso de RA debe aportar algo educativo.

No añadir modelos 3D únicamente porque se ven bien.

---

# FASE 5. Configuración de GitHub Codespaces

## Objetivo

Tener un entorno reproducible antes de escribir el aplicativo.

## Procedimiento

Crear:

```text
GitHub
↓
Codespaces
↓
Blank
↓
Use this template
```

Después abrir:

```text
Terminal > New Terminal
```

Ejecutar:

```bash
pwd
npx --version
```

## Resultado esperado

La terminal debe reconocer `npx`.

## Instalar extensiones

| Extensión | ID |
|---|---|
| Java Auto Config | Pleiades.java-extension-pack-jdk |
| Spring Boot Extension Pack | vmware.vscode-boot-dev-pack |
| Dev Containers | ms-vscode-remote.remote-containers |
| SonarQube | SonarSource.sonarlint-vscode |
| Live Share | MS-vsliveshare.vsliveshare |
| Material Icon Theme | PKief.material-icon-theme |

Importante: Java y Spring Boot forman parte del entorno solicitado, pero no intervienen directamente en la ejecución del aplicativo de esta práctica. El proyecto web utiliza HTML, CSS y JavaScript.

## Evidencias

Capturas:

```text
01_codespace.png
02_terminal_npx.png
03_extensiones.png
```

---

# FASE 6. Estructura del proyecto

## Crear

```bash
mkdir -p .vscode public/js public/css public/assets
```

## Estructura base

```text
proyecto-ra/
│
├── .vscode/
│   └── extensions.json
│
├── docs/
│   ├── fuentes.md
│   ├── storyboard_libro.md
│   └── pruebas.md
│
└── public/
    │
    ├── aframe.html
    ├── vista3d.html
    ├── index.html
    │
    ├── css/
    │   └── estilos.css
    │
    ├── js/
    │   ├── escena.js
    │   ├── objetos.js
    │   └── libro.js
    │
    └── assets/
        ├── models/
        ├── images/
        ├── audio/
        ├── video/
        └── markers/
```

Esta estructura amplía ligeramente la de la actividad para mantener ordenados los recursos.

---

# FASE 7. Configuración del servidor

## Objetivo

Ejecutar el aplicativo mediante un servidor real.

Ejecutar:

```bash
npx --yes http-server public -p 8000 -a 0.0.0.0
```

En Codespaces:

```text
Terminal
↓
Servidor puerto 8000
↓
Ports
↓
Open in Browser
```

La URL externa tendrá HTTPS.

Esto es fundamental para posteriormente solicitar acceso a la cámara.

## Prueba

Crear temporalmente:

```html
<h1>Proyecto RA funcionando</h1>
```

Abrir la URL pública o privada proporcionada por Codespaces.

## Evidencia

```text
04_servidor.png
05_puerto8000.png
```

---

# FASE 8. Primer prototipo A-Frame

## Objetivo

Aprender a crear y animar objetos 3D antes de incorporar RA.

## Crear

```text
public/aframe.html
```

## Implementar inicialmente

```text
<a-scene>
   objeto
   animación
   cámara
</a-scene>
```

## Conceptos que deben comprender

```text
a-scene
a-entity
a-sphere
position
rotation
scale
animation
material
camera
```

## Adaptación al tema

Si el tema es dengue:

```text
Esfera de prueba
      ↓
Mosquito simplificado
      ↓
Modelo GLB real
```

No empezar directamente por el modelo final.

## Criterios de aceptación

La escena debe:

```text
Cargar
Mostrar objeto
Animar objeto
Responder a transformaciones
No generar errores críticos
```

---

# FASE 9. Implementación de Three.js

## Objetivo

Incorporar comportamientos o geometrías que A-Frame por sí solo no represente convenientemente.

Three.js se obtiene mediante:

```javascript
const THREE = AFRAME.THREE;
```

No se debe agregar otra versión de Three.js separada si se está reutilizando la incluida en A-Frame.

## Flujo conceptual

```text
Geometry
↓
Material
↓
Mesh
↓
Object3D
↓
Animación
```

## Posibles usos

```text
Trayectorias
Partículas
Rotación
Animaciones
Indicadores
Líneas
Formas personalizadas
```

## Producto

Uno o más componentes reutilizables.

---

# FASE 10. Construcción del contenido 3D definitivo

## Objetivo

Construir el contenido que aparecerá posteriormente sobre el marcador.

Antes de RA debe existir una vista 3D independiente.

## Crear

```text
public/vista3d.html
```

## Flujo de validación

```text
Objetos
   ↓
Transformaciones
   ↓
Animaciones
   ↓
Escala
   ↓
Prueba navegador
   ↓
Solo después → RA
```

## Criterios

| Prueba | Resultado |
|---|---|
| Objeto | Visible |
| Material | Correcto |
| Orientación | Correcta |
| Escala | Correcta |
| Animación | Fluida |
| Consola | Sin errores críticos |

---

# FASE 11. Integración inicial con AR.js

## Objetivo

Convertir la escena 3D en una experiencia de realidad aumentada.

AR.js detecta el marcador mediante la cámara y actualiza la posición y orientación del contenido aumentado.

## Crear

```text
public/index.html
```

## Orden correcto de carga

```text
A-Frame
↓
AR.js
↓
Componentes propios
```

## Arquitectura

```text
<a-scene>
      │
      ├── AR.js
      │
      ├── <a-marker>
      │        │
      │        └── contenido 3D
      │
      └── <a-entity camera>
```

## Utilizar inicialmente Hiro

```html
<a-marker preset="hiro">
```

No implementar cinco marcadores inmediatamente.

Primero lograr:

```text
Hiro
↓
Detectado
↓
Objeto aparece
↓
Hiro desaparece
↓
Objeto desaparece
```

## Resultado de la fase

MVP técnico.

---

# FASE 12. Prueba real con cámara

## Objetivo

Confirmar que el MVP funciona fuera del navegador de escritorio.

## Procedimiento

```text
Celular
↓
URL HTTPS
↓
Aceptar cámara
↓
Enfocar Hiro
↓
Detectar marcador
↓
Ver objeto
```

## Recomendaciones

- Usar el marcador con tamaño aproximado de 8 a 10 cm.
- Mantener el marcador plano.
- Asegurar buena iluminación.
- Evitar reflejos.
- Mostrar el borde completo.
- No mover el dispositivo bruscamente.

## Probar

```text
Distancia
Iluminación
Ángulo
Movimiento
Pérdida del marcador
Recuperación
```

## Evidencias

```text
06_camara.png
07_hiro_detectado.png
08_modelo_ra.png
```

---

# FASE 13. Sistema de páginas

## Objetivo

Relacionar las cinco páginas educativas con el contenido digital correspondiente.

## Primera implementación recomendada

```text
Un marcador Hiro
+
Selector de página
```

Arquitectura:

```text
Página seleccionada
      ↓
libro.js
      ↓
mostrarPagina()
      ↓
visible=true / false
      ↓
Contenido correspondiente
```

## Añadir

```text
Texto educativo
Selector
Estado del marcador
Botón pausa
Botón continuar
```

## Validar

```text
Página 1 → contenido 1
Página 2 → contenido 2
Página 3 → contenido 3
Página 4 → contenido 4
Página 5 → contenido 5
```

---

# FASE 14. Interfaz de usuario

## Objetivo

Evitar que la interfaz interfiera con la cámara.

## Panel recomendado

```text
┌─────────────────────────────┐
│ Libro educativo RA          │
│                             │
│ Página: [▼]                 │
│                             │
│ Información educativa       │
│                             │
│ [Pausar]                    │
│                             │
│ Estado: marcador detectado  │
└─────────────────────────────┘

        CÁMARA + RA
```

## Estados útiles

```text
Esperando cámara...
Marcador detectado
Marcador perdido
Cargando modelo...
Error de cámara
```

El panel debe ocupar una parte limitada de la pantalla para dejar espacio suficiente a la cámara y al marcador.

---

# FASE 15. Integración de modelos externos y multimedia

## Modelos

Guardar:

```text
public/assets/models/modelo.glb
```

Implementar:

```html
<a-entity
    gltf-model="url(assets/models/modelo.glb)">
</a-entity>
```

## Audio

```text
public/assets/audio/narracion.mp3
```

## Video

```text
public/assets/video/explicacion.mp4
```

## Importante

Comprimir recursos.

Un proyecto muy pesado puede funcionar en PC y fallar o cargar lentamente desde celular.

## Registrar licencias

Cada modelo, imagen, video o sonido externo debería tener:

```text
Autor
Fuente
Licencia
URL
```

---

# FASE 16. Marcadores personalizados

Esta es una mejora respecto al MVP.

Se pueden generar archivos `.patt` distintos para cada página.

## Arquitectura final recomendada

```text
Página 1
 └── pagina1.patt
      └── Contenido 1

Página 2
 └── pagina2.patt
      └── Contenido 2

Página 3
 └── pagina3.patt
      └── Contenido 3

Página 4
 └── pagina4.patt
      └── Contenido 4

Página 5
 └── pagina5.patt
      └── Contenido 5
```

## Ventaja

Ya no sería necesario seleccionar manualmente la página.

La propia página determinaría qué contenido mostrar.

## Orden recomendado

```text
1 Hiro
↓
1 objeto
↓
5 contenidos
↓
selector
↓
marcadores personalizados
```

No al revés.

---

# FASE 17. Construcción gráfica del libro

## Objetivo

Crear el producto educativo final.

Puede hacerse en:

```text
Canva
PowerPoint
Word
Figma
otro editor
```

## Estructura

```text
PORTADA

ÍNDICE

PÁGINA 1
Introducción

PÁGINA 2
Causas

PÁGINA 3
Consecuencias

PÁGINA 4
Prevención

PÁGINA 5
Impacto

REFERENCIAS
```

Cada página debería incluir:

```text
Título
Texto
Ilustración
Dato destacado
Pregunta
Marcador
Instrucción RA
```

El contenido debe seguir siendo comprensible incluso sin RA. La realidad aumentada complementa la explicación, pero no la reemplaza.

---

# FASE 18. Integración mediante QR

Debe distinguirse correctamente:

```text
QR ≠ marcador RA
```

El QR:

```text
Abre la aplicación
```

El marcador:

```text
Posiciona el objeto 3D
```

## Flujo

```text
PORTADA
   │
   └── QR
       │
       ▼
Aplicación HTTPS
       │
       ▼
Permiso cámara
       │
       ▼
Marcador
       │
       ▼
Objeto RA
```

El QR debe utilizar la URL real publicada y nunca `localhost`.

---

# FASE 19. Publicación del proyecto

Codespaces puede servir para desarrollo, pero su URL depende de que el Codespace esté activo.

## Flujo mínimo

```text
Codespace
↓
GitHub Repository
↓
Aplicación
```

## Flujo recomendado para la entrega

```text
GitHub Repository
↓
Hosting HTTPS estático
↓
URL permanente
↓
QR
```

Esto reduce el riesgo de que el enlace deje de funcionar durante la presentación.

---

# FASE 20. Plan de pruebas

## Objetivo

Validar técnicamente todos los componentes del proyecto.

## Matriz

| ID | Prueba | Resultado esperado | Evidencia |
|---|---|---|---|
| T01 | Codespace | Abre correctamente | Captura |
| T02 | Puerto 8000 | Servidor responde | Captura |
| T03 | A-Frame | Objeto visible | Captura |
| T04 | Three.js | Animación correcta | Video |
| T05 | Cámara | Permiso concedido | Captura |
| T06 | Hiro | Detectado | Captura |
| T07 | Marker lost | Objeto desaparece | Video |
| T08 | Página 1 | Contenido correcto | Captura |
| T09 | Página 2 | Contenido correcto | Captura |
| T10 | Página 3 | Contenido correcto | Captura |
| T11 | Página 4 | Contenido correcto | Captura |
| T12 | Página 5 | Contenido correcto | Captura |
| T13 | Pausa | Animación se detiene | Video |
| T14 | Continuar | Animación continúa | Video |
| T15 | QR | Abre URL | Captura |
| T16 | Smartphone | Funciona correctamente | Video |

Para cada prueba registrar:

```text
Dispositivo:
Navegador:
Resultado:
Evidencia:
Conclusión:
```

---

# FASE 21. Corrección de errores

## Procedimiento recomendado

```text
ERROR
  ↓
Reproducir
  ↓
Registrar
  ↓
Revisar consola
  ↓
Identificar causa
  ↓
Corregir
  ↓
Volver a probar
  ↓
Cerrar incidencia
```

Crear:

```text
docs/incidencias.md
```

Ejemplo:

| ID | Error | Causa | Solución | Estado |
|---|---|---|---|---|
| E01 | Cámara no abre | HTTP | HTTPS | Cerrado |
| E02 | GLB enorme | Escala | scale 0.2 | Cerrado |

## Problemas que deben verificarse

- 404 o página no encontrada.
- Cámara bloqueada.
- Falta de HTTPS.
- Marcador no detectado.
- Modelo fuera de vista.
- Modelo demasiado grande.
- Scripts no cargados.
- Error `AFRAME is not defined`.
- URL del Codespace inactiva.
- Recursos multimedia demasiado pesados.

---

# FASE 22. Evidencias

## Carpeta

```text
evidencias/
│
├── 01_codespace.png
├── 02_extensiones.png
├── 03_servidor.png
├── 04_aframe.png
├── 05_threejs.png
├── 06_hiro.png
├── 07_ra_celular.png
├── 08_pagina1.png
├── 09_pagina2.png
├── 10_pagina3.png
├── 11_pagina4.png
├── 12_pagina5.png
├── 13_libro.png
└── 14_qr.png
```

Por cada evidencia:

```text
Prueba:
Resultado:
Interpretación:
Conclusión:
```

Una captura por sí sola no es suficiente; debe documentarse qué se probó y qué se concluyó.

---

# FASE 23. Informe o infografía final

Uno de los entregables es un informe breve o una infografía resumen.

## Estructura recomendada

```text
1. Título
2. Integrantes
3. Tema seleccionado
4. Problemática
5. Objetivo
6. Investigación
7. Solución propuesta
8. Tecnologías
9. Arquitectura
10. Desarrollo
11. Libro
12. Realidad aumentada
13. Pruebas
14. Problemas encontrados
15. Soluciones
16. Resultados
17. Conclusiones
18. Referencias
```

---

# FASE 24. Presentación final

La exposición debe incluir:

- tema elegido;
- demostración de RA;
- proceso de creación;
- dificultades;
- aprendizajes.

## Presentación recomendada

| Slide | Contenido |
|---|---|
| 1 | Portada |
| 2 | Problemática |
| 3 | Objetivo |
| 4 | Investigación |
| 5 | Propuesta |
| 6 | Arquitectura |
| 7 | Tecnologías |
| 8 | Desarrollo |
| 9 | Libro |
| 10 | Realidad aumentada |
| 11 | Demostración |
| 12 | Pruebas |
| 13 | Dificultades |
| 14 | Soluciones |
| 15 | Resultados |
| 16 | Conclusiones |

---

# FASE 25. Simulación de exposición

No conviene realizar la primera demostración delante del docente.

## Ensayo

Probar exactamente:

```text
Abrir QR
↓
Abrir aplicación
↓
Aceptar cámara
↓
Enfocar marcador
↓
Mostrar modelo
↓
Cambiar página
↓
Pausar
↓
Continuar
↓
Mostrar otro contenido
```

## Preparar plan B

Tener:

```text
PDF del libro
Video de demostración
Capturas
URL
Repositorio GitHub
Marcador impreso
Segundo celular
```

Así, una falla de Internet no destruye toda la exposición.

---

# Arquitectura final recomendada

```text
                    ┌───────────────────┐
                    │    LIBRO RA       │
                    │ físico / digital  │
                    └─────────┬─────────┘
                              │
               ┌──────────────┴──────────────┐
               │                             │
              QR                         Marcador
               │                             │
               ▼                             ▼
      ┌────────────────┐            ┌────────────────┐
      │ Aplicación Web │◄───────────│     AR.js      │
      └───────┬────────┘            └────────────────┘
              │
      ┌───────┴─────────┐
      │                 │
      ▼                 ▼
┌──────────┐      ┌───────────┐
│ A-Frame  │      │ Three.js  │
└────┬─────┘      └─────┬─────┘
     │                  │
     └──────────┬───────┘
                ▼
       ┌────────────────┐
       │ Recursos RA    │
       │ 3D / video     │
       │ audio / anim.  │
       └────────────────┘
```

---

# Estructura final del repositorio

```text
libro-ra/
│
├── README.md
│
├── .vscode/
│   └── extensions.json
│
├── docs/
│   ├── plan.md
│   ├── fuentes.md
│   ├── storyboard.md
│   ├── pruebas.md
│   └── incidencias.md
│
├── public/
│   ├── index.html
│   ├── aframe.html
│   ├── vista3d.html
│   │
│   ├── css/
│   │   └── estilos.css
│   │
│   ├── js/
│   │   ├── escena.js
│   │   ├── objetos.js
│   │   ├── interacciones.js
│   │   └── libro.js
│   │
│   └── assets/
│       ├── models/
│       │   └── *.glb
│       ├── markers/
│       │   └── *.patt
│       ├── audio/
│       │   └── *.mp3
│       ├── video/
│       │   └── *.mp4
│       └── images/
│           └── *.png
│
├── libro/
│   └── Libro_RA.pdf
│
├── presentacion/
│   └── Presentacion_RA.pptx
│
└── evidencias/
    └── ...
```

---

# Orden real de implementación

```text
1. Tema
        ↓
2. Investigación
        ↓
3. Contenido de 5 páginas
        ↓
4. Storyboard
        ↓
5. Diseño de experiencia RA
        ↓
6. Codespaces
        ↓
7. Estructura del proyecto
        ↓
8. Servidor
        ↓
9. A-Frame
        ↓
10. Three.js
        ↓
11. Vista 3D
        ↓
12. Hiro + AR.js
        ↓
13. Prueba celular
        ↓
14. Sistema de páginas
        ↓
15. Multimedia
        ↓
16. Marcadores personalizados
        ↓
17. Diseño final del libro
        ↓
18. QR
        ↓
19. Publicación
        ↓
20. Pruebas
        ↓
21. Correcciones
        ↓
22. Evidencias
        ↓
23. Informe
        ↓
24. PPT
        ↓
25. Ensayo
        ↓
ENTREGA
```

---

# Hitos importantes

| Hito | Resultado |
|---|---|
| H1 | Tema e investigación terminados |
| H2 | Cinco páginas planificadas |
| H3 | Codespace funcionando |
| H4 | Modelo 3D funcionando sin RA |
| H5 — MVP | Hiro muestra correctamente un objeto |
| H6 | Cinco contenidos funcionando |
| H7 | Libro terminado |
| H8 | QR + aplicación integrados |
| H9 | Pruebas superadas |
| H10 | Informe + PPT + demo listos |

---

# MVP técnico recomendado

El primer objetivo técnico real debe ser alcanzar:

```text
URL HTTPS
+
cámara
+
Hiro
+
1 modelo
=
RA FUNCIONAL
```

Una vez que este MVP esté estable, se debe escalar a:

```text
5 contenidos
+
sistema de páginas
+
multimedia
+
marcadores personalizados
+
libro final
```

---

# Checklist final de entrega

- [ ] Tema seleccionado y delimitado.
- [ ] Investigación respaldada por fuentes confiables.
- [ ] Portada terminada.
- [ ] Índice terminado.
- [ ] Cinco páginas de contenido terminadas.
- [ ] Imágenes, gráficos o ilustraciones integrados.
- [ ] Aplicación web funcionando.
- [ ] A-Frame implementado.
- [ ] Three.js implementado.
- [ ] AR.js implementado.
- [ ] Cámara funcionando mediante HTTPS.
- [ ] Marcador Hiro validado.
- [ ] Cinco contenidos RA funcionando.
- [ ] Modelos, animaciones o multimedia integrados.
- [ ] QR funcionando.
- [ ] Libro exportado a PDF o preparado para impresión.
- [ ] Pruebas documentadas.
- [ ] Evidencias organizadas.
- [ ] Incidencias corregidas.
- [ ] Informe o infografía terminado.
- [ ] Presentación terminada.
- [ ] Demostración ensayada.
- [ ] Plan B preparado para la exposición.
- [ ] Todos los integrantes comprenden el código.
- [ ] Todos los integrantes pueden explicar el funcionamiento.

---

# Fuente base

Plan elaborado a partir de la actividad:

**Actividad 2 — Libro educativo del sistema solar con realidad aumentada. Guía práctica con GitHub Codespaces, A-Frame, Three.js y AR.js. Curso: Tecnologías Emergentes, USIL.**

La propuesta conserva el flujo metodológico de la guía y lo reorganiza como un plan de implementación por fases para el proyecto final del estudiante.
