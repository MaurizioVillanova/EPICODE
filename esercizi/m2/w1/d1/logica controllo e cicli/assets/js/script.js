const arrayMesi = ['gennaio','febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre' ]



var dataCompleta = new Date();
document.getElementById('data-completa').innerHTML = dataCompleta;
var giorno = dataCompleta.getDate();
document.getElementById('giorno').innerHTML += giorno;
var mese = dataCompleta.getMonth();
document.getElementById('mese').innerHTML += arrayMesi[mese];
document.getElementById('data-attuale').innerHTML += `${giorno} -${mese} - ${dataCompleta.getFullYear()}`;
document.getElementById('data').innerHTML += `${giorno} -${arrayMesi[dataCompleta.getMonth()]} - ${dataCompleta.getFullYear()}`;

