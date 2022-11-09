var saluto = document.getElementById("saluto");
var btnAdd = document.getElementById('inserisci');
var btnDelete = document.getElementById('cancella');
btnAdd.addEventListener('click', function(e){
    e.preventDefault();
    var nome = document.getElementById("nome").value;
    localStorage.setItem("utente", nome);
    saluto.innerHTML = `Ciao ${localStorage.getItem("utente")}`;
    document.getElementById("nome").value ="";
})
btnDelete.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.removeItem("utente");
saluto.innerHTML ='';

})