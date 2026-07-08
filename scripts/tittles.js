document.addEventListener('DOMContentLoaded', () => {
    const titles = ["kiero morirme hoy!!!1", "EX ZETA BLOG !!", ">.<"];
    let ind = 0;

    setInterval(() => {
        ind = (ind + 1) % titles.length;
        document.title = titles[ind];
    }, 2000);
});