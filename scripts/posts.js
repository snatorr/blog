document.addEventListener('DOMContentLoaded', () => {
    // EDITAR ENTRADAS
    const entradas = [
        {
            titulo: "MIREN MI CAFE :3",
            fecha: "10 de julio de 2026",
            contenido: "miren mi cafe les gusta o no diganme por ig",
            imagen: "assets/pictures/post.heinc"
        },
        {
            titulo: "Q FRIO ASE",
            fecha: "9 de julio de 2026",
            contenido: "DIOS Q FRIO Q TENGO LA CONCHA D LA LORA"
        },
        {
            titulo: "BIENVENIDOS A TODOS",
            fecha: "9 de julio de 2026",
            contenido: "HOLA HIJOS DE MIL PUTA SOY EX ZETA GAMES  bienvenidos  ami blog aqui voy a  subir mispendejadas hijos deputa nos vemos",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xgMEa3__z8mwviABHraYWKgoCbaFU05cnn3_ycHxkLnZYS526hcC7zk5&s=10"
        },
        {
            titulo: "XD",
            fecha: "8 de julio de 2026",
            contenido: "lpm solo se ve en pc ok es q sino m rompe todo el mobilefirst"
        },
        {
            titulo: "PUSE UN MP3 LES GUSTA O NO",
            fecha: "8 de julio de 2026",
            contenido: "diganme si o no ok",
            imagen: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3c4ZnRwa2wwbmI3cnNzem9lcm8wbTJvcnJzdm5oNmY1am91Z2xwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8oh42nM14t50Q/giphy.gif"
        },
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
                <small class="post-fecha">${post.fecha}</small>
                <h2 class="post-titulo">${post.titulo}</h2>
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
