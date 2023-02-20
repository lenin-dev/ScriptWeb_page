window.addEventListener("scroll", function(){
    movimiento();
})

function movimiento() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("scrolling", window.scrollY > 20);
}