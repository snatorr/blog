document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('momiPaintCanvasLeft');
    const ctx = canvas.getContext('2d');
    const colorPreview = document.getElementById('momiCurrentColorPreview');
    
    let painting = false;
    let currentColor = '#000000';
    let brushSize = 3;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        const rect = canvas.getBoundingClientRect();
        
        const escalaX = canvas.width / rect.width;
        const escalaY = canvas.height / rect.height;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        ctx.lineWidth = brushSize;
        ctx.strokeStyle = currentColor;

        const xCalibrado = (clientX - rect.left) * escalaX;
        const yCalibrado = (clientY - rect.top) * escalaY;

        ctx.lineTo(xCalibrado, yCalibrado);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(xCalibrado, yCalibrado);
    }

    // Eventos para Mouse (PC)
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseleave', endPosition);

    // Eventos para Touch (Celulares - Mobile First)
    canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startPosition(e); });
    canvas.addEventListener('touchend', endPosition);
    canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); });

    // Funciones globales vinculadas a la ventana (necesarias para los onclick del HTML)
    window.selectPaintColor = function(color) {
        currentColor = color;
        colorPreview.style.background = color;
        // Si elige blanco, actúa automáticamente como borrador grueso (12px)
        brushSize = (color === '#ffffff') ? 12 : 3;
    };

    window.clearCanvas = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
});