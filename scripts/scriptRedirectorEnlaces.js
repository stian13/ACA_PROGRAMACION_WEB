const motos125 = document.getElementById("motos125");
const motos160 = document.getElementById("motos160");
const motos200 = document.getElementById("motos200");
//este codigo se encarga de redirigir a la pagina correspondiente al hacer click en cada tarjeta de moto
motos125.addEventListener("click", () => {
    window.location.href = "motos125.html";
});
motos160.addEventListener("click", () => {
    window.location.href = "motos160.html";
});
motos200.addEventListener("click", () => {
    window.location.href = "motos200.html";
});

