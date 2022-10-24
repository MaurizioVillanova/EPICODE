var dataCompleta = new Date();

var saluto = document.getElementById('saluti').innerHTML

if (dataCompleta.getHours() < 5) {
saluti.innerHTML = "Cosa ci fai qui di notte??";
}
else if (dataCompleta.getHours() < 12) {
saluti.innerHTML = "Buongiorno!!";
}
else if (dataCompleta.getHours() < 17) {
saluti.innerHTML = "Buon pomeriggio!!";
}
else {
saluti.innerHTML = "Buonasera!!";
}