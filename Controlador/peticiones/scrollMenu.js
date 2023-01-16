const navScroll = document.querySelector('navbar');

window.addEventListener("scroll", () => {
    if(window.scrollY >= 56) {
        navScroll.classList.add('nav-scroll');
    } else if(window.scrollY < 56) {
        navScroll.classList.remove('nav-scroll');
    }
});