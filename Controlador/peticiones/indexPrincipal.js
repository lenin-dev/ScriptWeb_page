cargarSlider();
cargarMenu();
cargarQuien();

function cargarMenu() {
    const http = new XMLHttpRequest();
    const url = './Vistas/menu.html';

    http.open('GET', url);
    http.send();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("contMenu").innerHTML = this.responseText;
        }
    }
}

function cargarSlider() {
    const http = new XMLHttpRequest();
    const url = './Vistas/slider.html';

    http.open('GET', url);
    http.send();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("contSlider").innerHTML = this.responseText;
        }
    }
}

function cargarQuien() {
    const http = new XMLHttpRequest();
    const url = './Vistas/QuienSomos.html';

    http.open('GET', url);
    http.send();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("contQuien").innerHTML = this.responseText;
        }
    }
}