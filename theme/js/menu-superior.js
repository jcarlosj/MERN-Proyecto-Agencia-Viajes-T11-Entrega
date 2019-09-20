var runOnScroll = function (evt) {
    var scroll = this.scrollY;

    var header = document.querySelector(".menu-superior")
    var imgTop = document.querySelector(".imagen-superior")
    var logo = document.querySelector(".logo-nav")
    var menu = document.querySelectorAll(".menu-superior li a")
    var iconos = document.querySelectorAll(".icono-nav")


    if (scroll > imgTop.clientHeight) {

        menu.forEach(element => {
            element.style.color = "#6a6c6d"
        });
        logo.src = "imagenes/logotipo-boreal-gris.png";

        iconos.forEach(element => {
            element.style.fill = "#6a6c6d"
        })

        header.style.backgroundColor = "#ffffffa8"
        
    } else {
        menu.forEach(element => {
            element.style.color = "white"
        });
        logo.src = "imagenes/logotipo-boreal-blanco.png";
        
        iconos.forEach(element => {
            
            element.style.fill = "white"
        })
        header.style.backgroundColor = "unset"
    }
}
window.addEventListener("scroll", runOnScroll)