var btn = document.querySelector('#inserisci');
var titolo = document.getElementById('titolo').value;
var compito = document.getElementById('compito').value;
var todo = titolo + '' + compito;
var lista = document.getElementById('lista');
btn.addEventListener('click', function(){
    var li = document.createElement('li');
    var text = document.createTextNode(todo);
    lista.appendChild(li)
})