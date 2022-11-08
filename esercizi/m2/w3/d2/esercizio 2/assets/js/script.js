var current_page = 1;
var records_per_page = 2;

var objJson = [
    {id:1, nome :'Luca', cognome: 'Rossi', classe: 'A'},
    {id:2, nome :'Luigi', cognome: 'Verdi', classe: 'A'},
    {id:3, nome :'Mario', cognome: 'Bianchi', classe: 'A'},
    {id:4, nome :'Piero', cognome: 'Neri', classe: 'A'},
    {id:5, nome :'Paolo', cognome: 'Rossi', classe: 'A'},
    {id:6, nome :'Sergio', cognome: 'Verdi', classe: 'A'},
    {id:7, nome :'Gianni', cognome: 'Bianchi', classe: 'A'},
    {id:8, nome :'Davide', cognome: 'Neri', classe: 'A'},
];


function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        listing_table.innerHTML += objJson[i].adName + "<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}
class Pagination{
    constructor(_Pagesize, _items ){
        this.current_page = 1;
        this.Pagesize = _Pagesize;
        this.items = _items;
    }
    avanti(){
        this.current_page += 1 //this.currentpage ++

    }
    indietro(){
        this.current_page -= 1
    }
    
visualizza(){
    // indice iniziale e finale
    //for a partire dall'indice inziale fino al finale 
    //NEL FOR GLI ELEMENTI DELL'ARRAY gli indici indicati vengono inseriti nel documento
    let indiceIniziale = 0;
    let indiceFinale = 2;
   listaTabella.innerHTML= '';
   for (var i = (indiceIniziale *_Pagesize); i < (indiceFinale * _Pagesize); i++) {
    listaTabella.innerHTML += _items[i].adName + "<br>";
}

}
}

let p = new Pagination(3,objJson);
p.visualizza()

p.avanti()
p.visualizza()