// libro.js — Sistema de páginas del libro educativo con RA

/**
 * Contenido educativo de cada página
 * Cada página contiene un título y un texto informativo
 * basado en fuentes científicas sobre el cambio climático
 */
var CONTENIDO_PAGINAS = {
    1: {
        titulo: '¿Qué es el cambio climático?',
        texto: 'El cambio climático es la variación significativa del clima global causada por la acumulación de gases de efecto invernadero en la atmósfera. El CO₂ y el metano atrapan el calor del sol, elevando la temperatura promedio del planeta. Desde la era preindustrial, la temperatura global ha aumentado aproximadamente 1.1°C.'
    },
    2: {
        titulo: 'Causas principales',
        texto: 'Las principales causas son la quema de combustibles fósiles (petróleo, gas, carbón), la deforestación masiva, la agricultura industrial y los procesos de fabricación. Estas actividades liberan enormes cantidades de CO₂ y metano. El sector energético es responsable de aproximadamente el 73% de las emisiones globales.'
    },
    3: {
        titulo: 'Consecuencias',
        texto: 'El deshielo de los glaciares y casquetes polares eleva el nivel del mar. Se intensifican fenómenos meteorológicos extremos: huracanes, sequías, inundaciones y olas de calor que afectan a millones de personas. El nivel del mar podría subir entre 0.3 y 1 metro para 2100.'
    },
    4: {
        titulo: 'Impacto en ecosistemas',
        texto: 'Los ecosistemas terrestres y marinos sufren pérdida de biodiversidad. Los corales se blanquean, los bosques se degradan y miles de especies enfrentan riesgo de extinción por la velocidad del cambio. Se estima que 1 millón de especies están en peligro de extinción, muchas por el cambio climático.'
    },
    5: {
        titulo: 'Soluciones y mitigación',
        texto: 'Las energías renovables (solar, eólica, hidroeléctrica), la reforestación, la reducción de emisiones industriales y los acuerdos internacionales como el Acuerdo de París son estrategias clave para frenar el calentamiento global. Cada acción individual también cuenta: reducir, reutilizar, reciclar.'
    }
};

/**
 * Muestra la página seleccionada y oculta las demás
 * @param {number} numeroPagina - Número de la página a mostrar (1-5)
 */
function mostrarPagina(numeroPagina) {
    // Ocultar todas las páginas RA
    for (var i = 1; i <= 5; i++) {
        var pagina = document.getElementById('pagina-' + i);
        if (pagina) {
            pagina.setAttribute('visible', i === numeroPagina);
        }
    }

    // Actualizar panel de información
    var info = CONTENIDO_PAGINAS[numeroPagina];
    if (info) {
        var textoEl = document.getElementById('info-texto');
        if (textoEl) {
            textoEl.textContent = info.texto;
        }
    }

    console.log('📖 Página ' + numeroPagina + ': ' + (info ? info.titulo : ''));
}

/**
 * Inicialización del sistema de páginas
 */
document.addEventListener('DOMContentLoaded', function () {
    var selector = document.getElementById('select-pagina');
    if (selector) {
        selector.addEventListener('change', function () {
            mostrarPagina(parseInt(this.value));
        });
    }

    // Mostrar página 1 por defecto
    mostrarPagina(1);

    console.log('📚 Sistema de páginas inicializado — 5 páginas cargadas');
});
