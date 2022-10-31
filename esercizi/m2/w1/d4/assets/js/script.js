function toggleMenu() {
  document.getElementById("btn-panel").classList.toggle("mostra");
}

document.querySelector("#btn1").addEventListener("click", function () {
  document.querySelector(".cambia").style.fontSize = "40px";
});
document.querySelector("#btn2").addEventListener("click", function  () {
  document.querySelector(".cambia").style.color = "red";
});
document.querySelector("#btn3").addEventListener("click", function () {
  document.querySelector(".cambia").style.textTransform = "uppercase";
});
document.querySelector("#btn4").addEventListener("click", function () {
  document.querySelector(".cambia").style.visibility = "hidden";
});
document.querySelector("#btn5").addEventListener("click", function () {
  document.querySelector(".cambia").style.visibility = "visible";
});





//gestione della lista
let lista = document.querySelectorAll('li');
for (var i = 0; i < lista.length; i++) {
    lista[i].addEventListener('click', function() {
        this.classList.toggle('fatto');
    });
}
