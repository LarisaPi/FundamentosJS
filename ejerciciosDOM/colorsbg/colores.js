// Capturamos los deslizadores
const anchoDeslizador = document.getElementById('anchoDeslizador');
const altoDeslizador = document.getElementById('altoDeslizador');
const sombraDeslizador = document.getElementById('sombraDeslizador');
const bordeDeslizador = document.getElementById('bordeDeslizador');

// Ajustar el ancho del div
anchoDeslizador.addEventListener('input', function() {
    div.style.width = `${anchoDeslizador.value}px`;
});

// Ajustar el alto del div
altoDeslizador.addEventListener('input', function() {
    div.style.height = `${altoDeslizador.value}px`;
});

// Ajustar la sombra del div
sombraDeslizador.addEventListener('input', function() {
    div.style.boxShadow = `0px 4px ${sombraDeslizador.value}px rgba(0, 0, 0, 0.5)`;
});

// Ajustar el borde del div
bordeDeslizador.addEventListener('input', function() {
    div.style.borderRadius = `${bordeDeslizador.value}px`;
});

// Función para cambiar el color de fondo del div usando los deslizadores de color
function nuevoColor() {
    const Rojo = document.getElementById('Rojo').value;
    const Verde = document.getElementById('Verde').value;
    const Azul = document.getElementById('Azul').value;
    const Transparencia = document.getElementById('Transparencia').value;

    // Usar rgba para aplicar el color con transparencia
    div.style.backgroundColor = `rgba(${Rojo}, ${Verde}, ${Azul}, ${Transparencia})`;
}