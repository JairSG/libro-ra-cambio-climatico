// escena.js — Componentes A-Frame personalizados para el Libro RA

/**
 * Componente: info-panel
 * Muestra información educativa al hacer clic en un objeto
 */
AFRAME.registerComponent('info-panel', {
    schema: {
        titulo: { type: 'string', default: '' },
        descripcion: { type: 'string', default: '' }
    },
    init: function () {
        this.el.addEventListener('click', () => {
            var panel = document.getElementById('panel-info');
            if (panel) {
                var tituloEl = panel.querySelector('.panel-titulo');
                var descEl = panel.querySelector('.panel-descripcion');
                if (tituloEl) tituloEl.textContent = this.data.titulo;
                if (descEl) descEl.textContent = this.data.descripcion;
                panel.style.display = 'block';
            }
        });
    }
});

/**
 * Componente: marker-status
 * Actualiza el estado del marcador en la interfaz
 */
AFRAME.registerComponent('marker-status', {
    init: function () {
        this.el.addEventListener('markerFound', function () {
            var status = document.getElementById('estado-marcador');
            if (status) {
                status.textContent = '✅ Marcador detectado';
                status.style.color = '#2ECC71';
            }
        });

        this.el.addEventListener('markerLost', function () {
            var status = document.getElementById('estado-marcador');
            if (status) {
                status.textContent = '⏳ Buscando marcador...';
                status.style.color = '#F5B041';
            }
        });
    }
});

/**
 * Componente: auto-rotate
 * Rotación automática para objetos sobre el marcador
 */
AFRAME.registerComponent('auto-rotate', {
    schema: {
        speed: { type: 'number', default: 1 }
    },
    tick: function (time, timeDelta) {
        this.el.object3D.rotation.y += (timeDelta / 1000) * this.data.speed;
    }
});
