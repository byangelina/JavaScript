
// esto es para el menu de la pagina
document.addEventListener("DOMContentLoaded", () => {

    // Highlight.js (si está cargado)
    if (window.hljs) {
        hljs.highlightAll();
    }

    // --- MENÚ LATERAL ---
    const menu = document.getElementById('menu');
    const toggle = document.getElementById('menuToggle');
    const backdrop = document.getElementById('menuBackdrop');

    console.log("MENU:", menu);
    console.log("BOTÓN:", toggle);
    console.log("BACKDROP:", backdrop);

    // Mostrar / ocultar menú
    toggle.addEventListener('click', () => {
        console.log("click!");
        menu.classList.toggle('open');
        backdrop.classList.toggle('visible');
    });

    // Cerrar al hacer click en el backdrop
    backdrop.addEventListener('click', () => {
        menu.classList.remove('open');
        backdrop.classList.remove('visible');
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            menu.classList.remove('open');
            backdrop.classList.remove('visible');
        }
    });

});
