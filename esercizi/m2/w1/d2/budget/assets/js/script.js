var btn = document.getElementById("calcola");

btn.addEventListener("click", function() {
  calcoloseguente();

})

function calcoloseguente () {
  if (Boolean(document.getElementById('spese').value) == false) {
    document.getElementById('spese').innerHTML = '';
    controllo();
}
}

function controllo() {
  let budget = document.getElementById("budget").value;
  if (budget < 100) {
    alert("Metti un importo superiore a 100");
    return;
  }
  spesa(budget);
}

function spesa(spesaIniziale) {
  let costo = Math.floor(Math.random() * 100 + 1);
  let storno = spesaIniziale - costo;
  document.getElementById("spese").innerHTML += `<li>Hai speso ${costo}</li>`;
  document.getElementById("spese").innerHTML += `<li>Il tuo storno è di ${storno}</li>`;
  while (storno > 100) {
    let costo = Math.floor(Math.random() * 100 + 1);
    storno = storno - costo;
    document.getElementById("spese").innerHTML += `<li>Hai speso ${costo}</li>`;
    document.getElementById("spese").innerHTML += `<li>Il tuo storno è di ${storno}</li>`;
  }
    document.getElementById('spese').innerHTML += `Hai speso troppo!`;
  }
  var btn2 = document.getElementById("clean");

  btn2.addEventListener("click", function() {
    clear();
  })
  function clear () {
    if (Boolean(document.getElementById('spese').value) == false) {
      document.getElementById('spese').innerHTML = '';
    }
  }