document.addEventListener('DOMContentLoaded', () => {
    const c = document.createElement('div');
    c.className = 'burbujas-container';
    document.body.appendChild(c);
    
    setInterval(() => {
        const b = document.createElement('div');
        b.className = 'frutiger-bubble';
        const t = Math.random() * 20 + 10;
        
        b.style.width = `${t}px`;
        b.style.height = `${t}px`;
        b.style.left = `${Math.random() * 100}%`;
        
        b.style.transition = 'opacity 0.5s';
        c.appendChild(b);
        
        let currentBottom = -60;
        const velocidad = Math.random() * 3 + 3.5;
        const rangoX = (Math.random() * 100) - 50;
        
        function actualizarBurbuja() {
            if (!b.parentNode) return;

            currentBottom += velocidad;
            
            const progreso = (currentBottom + 60) / 160; 
            const currentX = rangoX * Math.min(progreso, 1);

            b.style.bottom = `${currentBottom}px`;
            b.style.transform = `translateX(${currentX}px)`;

            if (currentBottom < window.innerHeight + 50) {
                requestAnimationFrame(actualizarBurbuja);
            } else {
                b.remove();
            }
        }

        requestAnimationFrame(actualizarBurbuja);

    }, 250);
});