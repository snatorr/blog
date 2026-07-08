document.addEventListener('DOMContentLoaded', () => {
    const c = document.createElement('div');
    c.className = 'burbujas-container';
    document.body.appendChild(c);
    
    setInterval(() => {
        const b = document.createElement('div');
        b.className = 'frutiger-bubble';
        const t = Math.random() * 20 + 10;
        
        // Estilos de tamaño y posición inicial
        b.style.width = `${t}px`;
        b.style.height = `${t}px`;
        b.style.left = `${Math.random() * 100}%`;
        
        const d = Math.random() * 5 + 7;
        b.style.transition = `bottom ${d}s linear, transform ${d}s linear, opacity 0.5s`;
        c.appendChild(b);
        
        // Animación hacia arriba
        setTimeout(() => {
            b.style.bottom = '105%';
            b.style.transform = `translateX(${(Math.random() * 100) - 50}px)`;
        }, 50);
        
        // Eliminar la burbuja cuando termina de subir
        setTimeout(() => b.remove(), d * 1000);
    }, 500);
});