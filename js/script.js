document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector("nav ul");
    const productos = document.querySelectorAll(".producto");
    const pageInfo = document.querySelector(".page-info");
    const pageNumbersContainer = document.querySelector(".page-numbers");
    const categoriaButtons = document.querySelectorAll(".categoria-btn");

    const productosPorPagina = 15;
    let paginaActual = 1;
    let categoriaActual = "todos";
    let productosFiltrados = Array.from(productos);
    let totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

    function filtrarProductos(categoria) {
        categoriaActual = categoria;
        paginaActual = 1;
        
        productosFiltrados = Array.from(productos).filter(producto => {
            if (categoria === "todos") {
                return true;
            }
            return producto.getAttribute("data-categoria") === categoria;
        });
        
        totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
        
        // Actualizar botones de categoría
        categoriaButtons.forEach(btn => {
            btn.classList.remove("activo");
            if (btn.getAttribute("data-categoria") === categoria) {
                btn.classList.add("activo");
            }
        });
        
        mostrarPagina(paginaActual);
    }

    function mostrarPagina(pagina) {
        const inicio = (pagina - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;

        productos.forEach(producto => {
            producto.style.display = "none";
        });

        productosFiltrados.forEach((producto, index) => {
            if (index >= inicio && index < fin) {
                producto.style.display = "block";
            }
        });

        actualizarNumerosDePagina();
    }

    function actualizarNumerosDePagina() {
        pageNumbersContainer.innerHTML = '';
        for (let i = 1; i <= totalPaginas; i++) {
            const pageNumber = document.createElement('span');
            pageNumber.textContent = i;
            pageNumber.classList.add('page-number');
            if (i === paginaActual) {
                pageNumber.classList.add('active');
            }
            pageNumber.addEventListener('click', function () {
                paginaActual = i;
                mostrarPagina(paginaActual);
                document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
            });
            pageNumbersContainer.appendChild(pageNumber);
        }
    }



    // Event listeners para botones de categoría
    categoriaButtons.forEach(button => {
        button.addEventListener("click", function() {
            const categoria = this.getAttribute("data-categoria");
            filtrarProductos(categoria);
        });
    });

    mostrarPagina(paginaActual);

    // Aquí puedes inicializar otras cosas si es necesario
});

// Funcionalidad del carrusel
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    // Ocultar todas las diapositivas
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Mostrar la diapositiva actual
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    // Volver al principio si llegamos al final
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    
    // Ir al final si estamos antes del principio
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1; // Los indicadores empiezan en 1
    showSlide(currentSlideIndex);
}

// Auto-play del carrusel (opcional)
function autoPlay() {
    setInterval(() => {
        changeSlide(1);
    }, 5000); // Cambia cada 5 segundos
}

// Inicializar el carrusel
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
    autoPlay();
});
