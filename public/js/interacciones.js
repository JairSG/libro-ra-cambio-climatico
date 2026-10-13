// interacciones.js — Controles de usuario para el Libro RA

/**
 * Estado global de pausa
 */
var pausado = false;

/**
 * Alterna el estado de pausa de todas las animaciones en la escena
 */
function togglePausa() {
    pausado = !pausado;
    var btn = document.getElementById('btn-pausar');

    // Obtener la escena principal
    var escena = document.querySelector('a-scene');
    if (!escena) return;

    // Obtener todas las entidades con animación
    var animados = escena.querySelectorAll('[animation]');
    animados.forEach(function (el) {
        if (pausado) {
            el.pause();
        } else {
            el.play();
        }
    });

    // Pausar/reanudar componentes Three.js personalizados
    var componentes = ['capa-gases', 'particulas-humo', 'turbina-eolica', 'gotas-agua'];
    componentes.forEach(function (comp) {
        var elementos = escena.querySelectorAll('[' + comp + ']');
        elementos.forEach(function (el) {
            if (pausado) {
                el.pause();
            } else {
                el.play();
            }
        });
    });

    // Actualizar texto del botón
    if (btn) {
        btn.textContent = pausado ? '▶ Continuar' : '⏸ Pausar';
    }

    console.log(pausado ? '⏸ Animaciones pausadas' : '▶ Animaciones reanudadas');
}

/**
 * Verificación de acceso a la cámara
 * Muestra feedback al usuario si la cámara no está disponible
 */
document.addEventListener('DOMContentLoaded', function () {
    // Solo verificar cámara si estamos en la página principal de RA
    if (!document.querySelector('a-scene[arjs]')) return;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then(function (stream) {
                console.log('✅ Cámara disponible');
                // Liberar el stream de prueba
                stream.getTracks().forEach(function (track) {
                    track.stop();
                });
            })
            .catch(function (err) {
                var estado = document.getElementById('estado-marcador');
                if (estado) {
                    estado.textContent = '❌ Error de cámara: ' + err.message;
                    estado.style.color = '#E74C3C';
                }
                console.error('Error de cámara:', err);
            });
    } else {
        var estado = document.getElementById('estado-marcador');
        if (estado) {
            estado.textContent = '❌ Cámara no soportada en este navegador';
            estado.style.color = '#E74C3C';
        }
    }

    // Listener de teclado para atajos
    document.addEventListener('keydown', function (e) {
        // Espacio para pausar/continuar
        if (e.code === 'Space') {
            e.preventDefault();
            togglePausa();
        }

        // Números 1-5 para cambiar de página
        if (e.key >= '1' && e.key <= '5') {
            var pagina = parseInt(e.key);
            var selector = document.getElementById('select-pagina');
            if (selector) {
                selector.value = pagina;
            }
            mostrarPagina(pagina);
        }
    });

    console.log('🎮 Controles inicializados — Espacio: pausar | 1-5: cambiar página');
});
