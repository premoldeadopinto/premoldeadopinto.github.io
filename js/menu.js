document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            const href = this.getAttribute("href");
            // Solo dejar seleccionado "Contacto". En "Inicio" y "Productos" no queda marcado.
            navLinks.forEach(a => a.classList.remove("active"));
            if (href === "#contacto") this.classList.add("active");

            if (window.matchMedia("(max-width: 768px)").matches) {
                navMenu.classList.remove("show");
            }
        });
    });

    // Marcar link activo según sección/hash (solo para páginas con anclas)
    function clearActive() {
        navLinks.forEach(a => a.classList.remove("active"));
    }

    function setActiveByHref(href) {
        clearActive();
        const found = Array.from(navLinks).find(a => a.getAttribute("href") === href);
        if (found) found.classList.add("active");
    }

    function updateActiveFromScroll() {
        const productos = document.querySelector("#productos");
        const contacto = document.querySelector("#contacto");
        if (!productos || !contacto) return;

        const header = document.querySelector("header");
        const offset = (header && header.offsetHeight) ? header.offsetHeight : 0;
        const y = window.scrollY + offset + 24; // compensación real por header sticky
        const productosTop = productos.getBoundingClientRect().top + window.scrollY;
        const contactoTop = contacto.getBoundingClientRect().top + window.scrollY;

        // Solo "Contacto" se marca como activo. En otras secciones, ninguno.
        if (y >= contactoTop) setActiveByHref("#contacto");
        else clearActive();
    }

    // Al cargar: si hay hash, marcarlo; si no, calcular por scroll
    if (window.location.hash === "#contacto") setActiveByHref("#contacto");
    else updateActiveFromScroll();

    window.addEventListener("hashchange", () => {
        if (window.location.hash === "#contacto") setActiveByHref("#contacto");
        else clearActive();
    });

    let ticking = false;
    window.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
            updateActiveFromScroll();
            ticking = false;
        });
    }, { passive: true });
});