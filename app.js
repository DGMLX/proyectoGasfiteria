const menu = document.querySelector(".bi-list");

cargarEventListeners();
function cargarEventListeners(){
    menu.addEventListener("click",menuResponsive);
}

function menuResponsive(){
    const nav = document.querySelector(".contenedor-nav");
    const header = document.querySelector("header");
    if(!menu.classList.contains("active")){
        menu.classList.add("active");
        nav.style.display="block";
        header.style.height="100vh"
    }else{
        menu.classList.remove("active");
        nav.style.display ="none";
        header.style.height="3.5rem"
    }
}



const intersection1 = document.getElementById("h2-efect1");
const intersection2 = document.getElementById("h2-efect2");
const intersection3 = document.getElementById("h2-efect3");
const intersection4 = document.getElementById("h2-efect4");
const intersection5 = document.getElementById("section4-efect1");
const intersection6 = document.getElementById("section4-efect2");
const intersection7 = document.getElementById("section4-efect3");







const cargarIntersection = entradas=>{
    entradas.forEach(entrada=>{
        if(entrada.isIntersecting){
            entrada.target.classList.remove("estilo-intersection");
            entrada.target.classList.add("visible");
        }
    }
    )
}

const cargarIntersection2 = entradas =>{
    entradas.forEach(entrada=>{
        if(entrada.isIntersecting){
            entrada.target.classList.remove("estilo-intersectionSlider");
            entrada.target.classList.add("derecha");
        }
    })
}

const cargarIntersectionV = entradas =>{
    entradas.forEach(entrada=>{
        if(entrada.isIntersecting){
            entrada.target.classList.remove("intersection-vertical");
            entrada.target.classList.add("vertical");
        }
    })
}

const observador = new IntersectionObserver(cargarIntersection,{
    root:null,
    rootMargin:"0px 0px 0px 0px",
    threshold:0.5
}
);

const observador2 = new IntersectionObserver(cargarIntersection2,{
    root:null,
    rootMargin:"0px 0px 0px 0px",
    threshold:0.5
}
);

const observador3 = new IntersectionObserver(cargarIntersectionV,{
    root:null,
    rootMargin:"0px 0px 0px 0px",
    threshold:0.5
}
);


observador2.observe(intersection1);
observador2.observe(intersection2);
observador2.observe(intersection3);
observador2.observe(intersection4);
observador.observe(intersection5);
observador.observe(intersection6);
observador.observe(intersection7);





