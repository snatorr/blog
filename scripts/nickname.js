document.addEventListener('DOMContentLoaded', () => {
    const nicknameElemento = document.querySelector('.grid_nav-nickname');
    const nicknames = ["BASURA", "ex zeta games", "snatorr", "netzeek", "santii :P"];
    let indiceNick = 0;

    if (nicknameElemento) {
        setInterval(() => {
            indiceNick = (indiceNick + 1) % nicknames.length;
            nicknameElemento.textContent = nicknames[indiceNick];
        }, 2000);
    }
});