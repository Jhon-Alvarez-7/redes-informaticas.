
/* BOTON VOLVER AL INICIO */
let botonInicio = document.getElementById("btnInicio");

botonInicio.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* BOTON CAMBIAR TEMA */
let botonTema = document.getElementById("btnTema");

botonTema.addEventListener("click", function() {

    document.body.classList.toggle("modo-claro");

    if (document.body.classList.contains("modo-claro")) {
        botonTema.textContent = "🌙 Modo oscuro";
    } else {
        botonTema.textContent = "☀️ Modo claro";
    }

});
