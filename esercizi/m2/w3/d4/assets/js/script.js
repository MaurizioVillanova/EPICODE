var elenco = [];

var dati = document.getElementById('dati');
window.addEventListener('DOMContentLoaded', init);
function init() {
  
    printData();
   
}



   

function printData() {
    fetch(' http://localhost:3000/utenti').then((response) => {
        return response.json();
    }).then((data) => {
        elenco = data;
        elenco.map(function(element) {
dati.innerHTML += `<tr><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td></tr>`;


});
    });
}




