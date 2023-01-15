cargarSlider();
cargarMenu();
cargarQuien();
cargarTarj();
cargarServicios();
cargarFooter();
cargarCotizacion();

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

function cargarTarj() {
    const http = new XMLHttpRequest();
    const url = './Vistas/tarjetas.html';

    http.open('GET', url);
    http.send();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("contTarj").innerHTML = this.responseText;
        }
    }
}

function cargarServicios() {
    const http = new XMLHttpRequest();
    const url = './Vistas/servicios.html';

    http.open('GET', url);
    http.send();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("contServ").innerHTML = this.responseText;
        }
    }
}

function cargarFooter() {
    const http = new XMLHttpRequest();
    const url = './Vistas/Footer.html';

    http.open('GET', url);
    http.send();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("contFooter").innerHTML = this.responseText;
        }
    }
}

function cargarCotizacion() {
    const http = new XMLHttpRequest();
    const url = './Vistas/cotizacion.html';

    http.open('GET', url);
    http.send();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("contCoti").innerHTML = this.responseText;
        }
    }
}