class vestiti{
    id:number;
    codProd:number;
    collezzione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;
    constructor(_id:number,_codProd:number,_collezzione:string,_capo:string,_modello:number,_quantita:number,_colore:string,_prezzoivaesclusa:number,
        _prezzoivainclusa:number,_disponibile:string,_saldo:number){
            this.id=_id;
            this.codProd=_codProd;
            this.collezzione=_collezzione;
            this.capo=_capo;
            this.modello=_modello;
            this.quantita=_quantita;
            this.colore=_colore;
            this.prezzoivaesclusa=_prezzoivaesclusa;
            this.prezzoivainclusa=_prezzoivainclusa;
            this.disponibile=_disponibile;
            this.saldo=_saldo;
        }
    public getSaldoCapo():number{
        return this.prezzoivaesclusa*this.saldo/100;
    }
    public getAcquistoCapo():number{
        return this.prezzoivainclusa-this.getSaldoCapo();
    }
}
let a = new vestiti(1, 2121, 'primavera', 'cardigan', 1231, 5, 'nero', 18.50, 22.57, 'negozio', 45 );

let b = new vestiti(2,4111, 'estate', 't-shirt', 1251, 6, 'rosso',5.50, 6.71, 'magazzino',30 );

let c = new vestiti(3, 1181, 'inverno', 'felpa', 1229, 8, 'belge', 17.50, 21.35,'negozio',50);

let d = new vestiti(4, 1111,'estate', 'maglione', 1221, 4, 'verde',20, 24.40, 'negozio',50)

let e = new vestiti (5, 6111, 'primavera', 'maglia', 1021, 5, 'blu', 11, 13.42, 'magazzino',60)

console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(a.getAcquistoCapo()))
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(b.getAcquistoCapo()))
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(c.getAcquistoCapo()))
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(d.getAcquistoCapo()))
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(e.getAcquistoCapo()))
 var array = [];
 function prendiAbb():void {
    fetch ('http://localhost:3000/capo').then((response)=> {
        return response.json();
 }).then((data) => {
    array = data;
    console.log(array);
    data.map(function(element:any){
let capo = new vestiti(element.id, element.codprod, element.collezzione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
console.log(capo);
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(capo.getAcquistoCapo()))
    })
 })
}
prendiAbb();