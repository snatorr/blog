let totalSegundos = 0;
const timerElemento = document.getElementById('blogSessionTimer');

function actualizarCronometro() {
    totalSegundos++;
    
    let minutos = Math.floor(totalSegundos / 60);
    let segundos = totalSegundos % 60;
    
    // Formateamos para que siempre muestre dos dígitos (ej: 01:05)
    let minString = minutos < 10 ? '0' + minutos : minutos;
    let segString = segundos < 10 ? '0' + segundos : segundos;
    
    if (timerElemento) {
        timerElemento.textContent = `${minString}:${segString}`;
    }
}

// Se ejecuta cada 1 segundo (1000ms)
setInterval(actualizarCronometro, 1000);