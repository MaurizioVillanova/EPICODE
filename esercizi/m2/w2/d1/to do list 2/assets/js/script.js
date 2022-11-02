var btn = document.getElementById("inserisci");
btn.addEventListener("click", function () {
  var titolo = document.getElementById("titolo").value;
  var compito = document.getElementById("compito").value;
  var todo = titolo + " " + compito;
  var lista = document.getElementById("lista");
  var li = document.createElement("li");
  var text = document.createTextNode(todo);
  lista.appendChild(li);
  li.appendChild(text);
  const buttonDelete = document.createElement('button');
  buttonDelete.className = 'delete';
  buttonDelete.appendChild(document.createTextNode('X'));    
  li.appendChild(buttonDelete);
  buttonDelete.addEventListener('click', (event) =>{
    const parentNodeEl = event.target.parentNode;
    setTimeout(() =>{
        parentNodeEl.remove();
    }, 500)})
});
