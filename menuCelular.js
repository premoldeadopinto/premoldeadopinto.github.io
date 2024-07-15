
/*$(document).ready(function() {
    main();
});*/
 
var contador = 1;

 
  
 
function main(){
    $(document).ready(function () {
    /*menu con el scrool para desplasarse otra forma*/
    /*$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
 
});*/
/*esta parte es lo del menu para celulares*/
	$('#boton').click(function(){/*si hago click en boton desaparece el menu*/
		// $('nav').toggle(); 
             
                
		if(contador === 1){
			$('nav').animate({
				// left: '0' menu a la izquierda
                                right: '0' // Mueve el menú hacia la derecha para mostrarlo
                                
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				//left: '-100%' izquierda
                                right: '-100%' // Mueve el menú hacia la derecha para ocultarlo
			});
		}
                
                
            
	});
        /*Contacto*/
        $('.menu2').click(function(){
		// $('nav').toggle(); 
 
		
			contador = 1;
			$('nav').animate({
				//left: '-100%'
                                right: '-100%' // Mueve el menú hacia la derecha para ocultarlo
			});
		
                
 
	                });
            /*Inicio*/
           $('.menu3').click(function(){
		// $('nav').toggle(); 
                     
			contador = 1;
			$('nav').animate({
				//left: '-100%'
                                right: '-100%' // Mueve el menú hacia la derecha para ocultarlo
			});
		
                
                        
		
                
 
	});
        /*Producto*/
           $('.submenu').click(function(){
		// $('nav').toggle(); 
 
		
			
			contador = 1;
			$('nav').animate({
				//left: '-100%'
                                right: '-100%' // Mueve el menú hacia la derecha para ocultarlo
			});
		
                
		    
                
 
	});
       
    });
 
};


