var primaStringa = "Sto imparando JavaScript";
var secondaStringa = " JS";
document.getElementById('maiuscola').innerHTML = primaStringa.toUpperCase();
document.getElementById('minuscola').innerHTML = primaStringa.toLowerCase();
document.getElementById('strArray').innerHTML = primaStringa.split("");
document.getElementById('estraiCaratteri').innerHTML = primaStringa.charAt(2)+primaStringa.charAt(1)+primaStringa.charAt(14)+primaStringa.charAt(18);
document.getElementById('concatena').innerHTML= primaStringa.concat(secondaStringa);
document.getElementById('estraiStringa').innerHTML = primaStringa.slice(5,9);
const listaNomi = ["Giovanni","Carla","Piero","Mirtilla"];
document.getElementById('array').innerHTML = listaNomi;
document.getElementById('lunghezza').innerHTML = listaNomi.length;
document.getElementById('elemento').innerHTML = listaNomi[2];
document.getElementById('ultimo').innerHTML = listaNomi[3];
listaNomi.splice(2,1,"Massimo");
document.getElementById('modificato').innerHTML = listaNomi;


    const annoAttuale = 2022 ; //con un solo paramentro non usi const ma su return fai 2022-passato
    annoNascite = [2001, 1990, 1987, 2018, 2010];
    function calcolaEta (attualita,passato){
        return attualita-passato;
    }
    var arrayEta = [calcolaEta (annoAttuale,annoNascite[0]),calcolaEta (annoAttuale,annoNascite[1]), calcolaEta (annoAttuale,annoNascite[2]), calcolaEta (annoAttuale,annoNascite[3]), calcolaEta (annoAttuale,annoNascite[4])];
document.getElementById('eta1').innerHTML += `${arrayEta[0]} anni`;
document.getElementById('eta2').innerHTML += `${arrayEta[1]} anni`;
document.getElementById('eta3').innerHTML += `${arrayEta[2]} anni`;
document.getElementById('eta4').innerHTML += `${arrayEta[3]} anni`;
document.getElementById('eta5').innerHTML += `${arrayEta[4]} anni`;
document.getElementById('arrayEta').innerHTML += arrayEta ;
var elencoAnimali = ['coniglio', 'cane', 'gatto', 'criceto',]
document.getElementById("intero").innerHTML = elencoAnimali;
elencoAnimali.push('leone');
document.getElementById("aggiunto").innerHTML = elencoAnimali;
elencoAnimali.pop();
document.getElementById("estratto").innerHTML = elencoAnimali;
document.getElementById("verifica1").innerHTML = elencoAnimali.includes('cane');
document.getElementById("verifica2").innerHTML = elencoAnimali.includes('leone');
