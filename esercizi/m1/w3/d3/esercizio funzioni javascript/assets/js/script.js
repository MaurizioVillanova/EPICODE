function calcoloSucco (mele, arance) {
    const succoFrutta = `Succo  con ${mele} mele e ${arance} arance`;
        return succoFrutta;
    }
        document.getElementById('corretta').innerHTML = calcoloSucco (4, 5);
        document.getElementById('sbagliata').innerHTML = calcoloSucco (6);
           
//calcolo eta♠
function calcolaEta (){
    let annoNascita = 1967;
    let eta = 2022 - annoNascita;
    document.getElementById('eta').innerHTML += `${eta} anni`;
}

calcolaEta();

// Arrow functions

const annoCorrente = 2022;
var etaAnna = 30;
var etaMaria = 24;

annoNascitaAnna = () => { 
    return annoCorrente - etaAnna;

}
annoNascitaMaria = () => { 
    return annoCorrente - etaMaria;

}
document.getElementById('persona1').innerHTML = ` L'anno di nascita di Anna è il ${annoNascitaAnna()}`;
document.getElementById('persona2').innerHTML = ` L'anno di nascita di Maria è il ${annoNascitaMaria()}`;

//funzione di funzione
function ricettaTorta {
 var = (function() {
    let fetteMela = 9;
    let fetteArancia = 15;
    let ricetta = `Torta con ${fetteMela} fette di mela e ${fetteArancia} fette di arancia ` ;
    return ricetta
})();
document.getElementById('torta').innerHTML = stampaRicetta;
}
ricettaTorta();
//calcolo
document.getElementById('calcola').addEventListener('click', function calcolospesa(){
var cibo = parseFloat(document.getElementById('cibo').value);
var detersivi = parseFloat(document.getElementById('detersivi').value);
var abiti = parseFloat(document.getElementById('abiti').value);
    const spesa = cibo+detersivi+abiti;
    document.getElementById('totale').innerHTML += spesa;
})

