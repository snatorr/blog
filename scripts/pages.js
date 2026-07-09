document.addEventListener("DOMContentLoaded", () => {
    const postsPerPage = 5;
    const contentContainer = document.querySelector(".grid_main") || document.body;
    const posts = Array.from(contentContainer.querySelectorAll(".post, article"));
    
    if (posts.length <= postsPerPage) return;

    let currentPage = 1;
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const paginationContainer = document.createElement("div");
    paginationContainer.className = "pagination-controls";
    
    document.body.appendChild(paginationContainer);

    function showPage(page) {
        currentPage = page;
        
        posts.forEach((post, index) => {
            const start = (page - 1) * postsPerPage;
            const end = start + postsPerPage;
            if (index >= start && index < end) {
                post.style.display = "block"; 
            } else {
                post.style.display = "none";
            }
        });

        renderControls();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderControls() {
        paginationContainer.innerHTML = "";

        const prevBtn = document.createElement("button");
        prevBtn.textContent = "« Anterior";
        prevBtn.className = "page-btn";
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => showPage(currentPage - 1);
        paginationContainer.appendChild(prevBtn);

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement("button");
            pageBtn.textContent = i;
            pageBtn.className = `page-btn ${i === currentPage ? "active" : ""}`;
            pageBtn.onclick = () => showPage(i);
            paginationContainer.appendChild(pageBtn);
        }

        const nextBtn = document.createElement("button");
        nextBtn.textContent = "Siguiente »";
        nextBtn.className = "page-btn";
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => showPage(currentPage + 1);
        paginationContainer.appendChild(nextBtn);
    }

    showPage(1);
});