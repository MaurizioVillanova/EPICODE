var nome;
var cognome;
var addBtn;
var elencoHTML;
var errore;
var erroreElenco;
var elenco = [];
var attiva = true;
var pingo ;
window.addEventListener('DOMContentLoaded', init);

function init() {
	nome = document.getElementById('nome');
	cognome = document.getElementById('cognome');
	addBtn = document.getElementById('scrivi');
	elencoHTML = document.getElementById('elenco');
	errore = document.getElementById('errore');
	erroreElenco = document.getElementById('erroreElenco');
	printData();
	eventHandler();
	//Document.getElementById('utenteaagiungi').addEventListener('click', function{


	//})
}

function eventHandler() {
	addBtn.addEventListener('click', function () {
		if (attiva==true){
		controlla();
		}else{cambia (); };
	});
}

function printData() {
	fetch(' http://localhost:3000/elenco')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elenco = data;
			if (elenco.length > 0) {
				errore.innerHTML = '';
				elencoHTML.innerHTML = '';
				elenco.map(function (element) {
					let li = document.createElement('li');
					let btnElimina = document.createElement('button');
					btnElimina.classList.add("btn","btn-danger","me-1")
					btnElimina.innerText = 'x';
					btnElimina.addEventListener('click', ()=>{
						elimina(element.id)
					});
					let btnInserisci = document.createElement('button');
					btnInserisci.classList.add("btn","btn-warning","me-1");
					btnInserisci.innerHTML ='<i class="bi bi-pen"></i>';
					btnInserisci.addEventListener('click', ()=>{
						inserisci(element);
					});
					let span = document.createElement('span');
				
					//elencoHTML.innerHTML += `<li><button type="button"  class="btn btn-danger me-1" onClick="elimina(${element.id})">X</button><button type="button"  class="btn btn-warning me-1" onClick="inserisci( ${element})"><i class="bi bi-pen"></i></button>${element.nome} ${element.cognome}</li>`;
					span.innerText = element.nome + ' '+ element.cognome;
				li.append(btnElimina, btnInserisci, span)
				elencoHTML.append(li)
				});

			} else {
				erroreElenco.innerHTML = 'Nessun elemento presente in elenco';
			}
		});
}

function controlla() {
	if (nome.value != '' && cognome.value != '') {
		var data = {
			nome: nome.value,
			cognome: cognome.value,
		};
		addData(data);
	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
		return;
	}
}

async function addData(data) {
	let response = await fetch(' http://localhost:3000/elenco', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm();
}

function clearForm() {
	nome.value = '';
	cognome.value = '';
}

function elimina(data) {
    if (confirm('Sei sicuro di voler eliminare questo utente?')) {
        eliminaDefinitivo(data)
    } 
}

async function eliminaDefinitivo(data) {
    let response = await fetch('http://localhost:3000/elenco/' + data, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });
}
function modifica(id, valu){
	fetch(' http://localhost:3000/elenco/'+id,{ method: 'PUT',
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
	body: JSON.stringify(valu),})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			//qua devo modificare li 
			console.log(data)
			
		});
	}
async function cambia() {
	
    let id = pingo;//devo dare un valore 
	let valu = {
		nome: nome.value,
		cognome: cognome.value
	}
	modifica(id, valu);

    
   
}

function inserisci(element){
	setForm(false);// variabile semaforo flag
nome.value = element.nome;
cognome.value = element.cognome
pingo = element.id//così prendo il valore da una funzione e la sposto leggendola in quellla di su!
}

function setForm(b){
	attiva = b;
	if (attiva == false){
addBtn.innerText = 'Modifica';
	}else{
		addBtn.innerText = 'Invia'
	}

}
