document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".card"),t=document.getElementById("pagination"),n=document.getElementById("cardContainer"),a=document.getElementById("scrollTarget");if(!n||!t||!a){console.error("Contenedor de tarjetas, de paginaci\xf3n o de desplazamiento no encontrado");return}function i(t){n.innerHTML="";let a=(t-1)*9,i=Array.from(e).slice(a,a+9);i.forEach(e=>{n.appendChild(e)})}function o(e){e.scrollIntoView({behavior:"smooth"})}!function n(){let r=Math.ceil(e.length/9);t.innerHTML="";for(let l=1;l<=r;l++){let c=document.createElement("button");c.innerText=l,c.addEventListener("click",()=>{i(l);let e=document.querySelector(".pagination .active");e&&e.classList.remove("active"),c.classList.add("active"),o(a)}),1===l&&c.classList.add("active"),t.appendChild(c)}}(),i(1)});