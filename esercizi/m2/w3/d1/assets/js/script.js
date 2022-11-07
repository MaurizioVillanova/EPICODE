var tabella = '';
function Dati (_nome, _cognome, _data){
    this.nome = _nome;
    this.cognome = _cognome;
    this.Datadinascita = _data;
    this.eta = ()=>{
    /*    birthday = document.getElementById('compleanno').value;*/
    today   = new Date();
   selezionadata = new Date(this.Datadinascita)
    var years = (today.getFullYear() -selezionadata.getFullYear());
 
    if (today.getMonth() < selezionadata.getMonth() || 
        today.getMonth() == selezionadata.getMonth() && today.getDate() < selezionadata.getDate()) {
        years--;
    }
 
    return years;
    }
    this.aggiungiriga = ()=>{
        tabella += `<tr><td>${this.nome}  ${this.cognome} </td><td>${this.eta()}</td></tr>`;
        document.getElementById('tabella').innerHTML += tabella;
    }
}
document.getElementById('mostra').addEventListener('click', function(){
    let myNome = document.getElementById('nome').value;
    let myCognome = document.getElementById('cognome').value;
    let myData = document.getElementById('compleanno').value;
   let daticompleti = new Dati(myNome, myCognome, myData)
   daticompleti.aggiungiriga()
});
/*function creaTabella(newNome, newCognome){
    let myDati = new Dati(newNome, newCognome);
    tabella += `<tr><td>${myDati.nome} - ${myDati.cognome} </td></tr>`;
    document.getElementById('tabella').innerHTML += tabella;
}
function Eta () {
    birthday = document.getElementById('compleanno').value;
    today     = new Date();
 
    var years = (today.getFullYear() - birthday.getFullYear());
 
    if (today.getMonth() < birthday.getMonth() || 
        today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate()) {
        years--;
    }
 
    return years;
}*/