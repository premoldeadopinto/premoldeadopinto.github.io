/*document.querySelector('.menu3')
        .addEventListener('click', () => {
            window.scrollTo({
                top: 0, /*donde terminara
                behavior: 'smooth'
            });

        });*/




  
/*desplazamiento hasta el final de la pagina*/
/*document.querySelector('.menu2')
 .addEventListener('click',()=>{
 window.scrollTo({
 top:8000,//contacto
 behavior:'smooth'
 });
 
 });*/

/* document.querySelector('.menu2').addEventListener('click', () => {
 // Selecciona el elemento de contacto por su id
 var contactoElement = document.getElementById('contacto');
 
 // Usa scrollIntoView para desplazar la página al elemento de contacto de manera suave
 contactoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
 });
 /*desplazamiento hasta el final de la pagina*/
/*document.querySelector('.menu2').addEventListener('click', () => {
 window.scrollTo({
 top: document.body.scrollHeight,
 behavior: 'smooth'
 });
 });*/


/*submenu del celular*/
function submenu() {
    $(document).ready(function () {/*cuando el documento haya cargado*/
        /*aqui saco el submenu*/
        /*funciona para cualquier submenu*/

        $('#color li:has(ul)').click(function (e) {
            if ($(document).width() < 800) {/*documento menor a 800*/
                e.preventDefault();
                if ($(this).hasClass('activado')) {/*aparece el activado cuando hago click*/
                    $(this).removeClass('activado');
                    $(this).children('ul').slideUp();
                } else {
                    $('#color li ul').slideUp();
                    $('#color li').removeClass('activado');
                    $(this).addClass('activado');
                    $(this).children('ul').slideDown();
                }
            }
        });

        $(window).resize(function () {/*tamaño de la ventana cambie*/
            if ($(document).width() > 800) {/*documento menor a 800*/

                $('#color li ul').css({'display': ''});/*no borrar si se quita se pone en display none y se desactiva el menu de escritorio*/
            }
        }
        );
        $(window).resize(function () {/*tamaño de la ventana cambie*/
            if ($(document).width() < 800) {/*documento menor a 800*/
                $('#color li ul').slideUp();/*elementos cerrados*/
                $('#color li').removeClass('activado');

            }
        }
        );
        $('.menu li ul li a').click(function () {
            window.location.href = $(this).attr("href");/*obtengo el atributo href del elemento clikeado*/
        });
    });
}
