document.addEventListener('DOMContentLoaded', () => {
    // EDITAR ENTRADAS
    const entradas = [
        {
            titulo: "MUAJAJAJAJA",
            fecha: "8 de julio de 2026",
            contenido: "HOLA HIJOs de m il puta bienvenidos ami blog hijos de puta"
        },
        {
            titulo: "felis mes amor :33",
            fecha: "8 de julio de 2026",
            contenido: "te amo muxho mucho",
            imagen: "assets/pictures/ilysm.webp"
        }
    ];

    // LOGICA DE HTML
    const mainContenedor = document.querySelector('.grid_main');
    if (mainContenedor) {
        mainContenedor.innerHTML = ''; 
        entradas.forEach(post => {
            const articulo = document.createElement('article');
            articulo.className = 'blog-post';
            let postHTML = `
                <h2 class="post-titulo">${post.titulo}</h2>
                <small class="post-fecha">${post.fecha}</small>
                <p class="post-contenido">${post.contenido}</p>
            `;
            if (post.imagen) {
                postHTML += `<img src="${post.imagen}" class="post-imagen" alt="Imagen del post">`;
            }
            postHTML += '<hr class="post-separador">';
            articulo.innerHTML = postHTML;
            mainContenedor.appendChild(articulo);
        });
    }
});