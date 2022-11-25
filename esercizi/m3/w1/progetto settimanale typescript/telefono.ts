interface interfaccia {
    credito: number;
    numerochiamate: number;
    ricarica(valore:number):void;
    chiamata(minuti:number):void;
    numero404():number;
    getNumeroChiamate():number;
    azzeraChiamate():void;
    
}
class primo implements interfaccia {
    credito: number;
    numerochiamate: number;
    tariffa: number;
    constructor(_credito: number,_numerochiamate: number) {
        this.credito=_credito;
        this.numerochiamate=_numerochiamate
        this.tariffa = 0.20;
    }
    ricarica(valore: number){return this.credito=this.credito+valore};
    chiamata(minuti:number){ this.credito=this.credito-(minuti*this.tariffa); this.numerochiamate ++ };
    numero404(){return this.credito};
    getNumeroChiamate(){return this.numerochiamate};
    azzeraChiamate(){ this.numerochiamate = 0};
}
class secondo extends primo {
    constructor(_credito: number,_numeroChiamate: number) {
        super(_credito,_numeroChiamate);
        this.tariffa = 0.35
    }}



class terzo extends primo {
    constructor(_credito: number,_numeroChiamate: number) {
        super(_credito,_numeroChiamate);
        this.tariffa = 0.30;
    }}



let cliente1 = new primo (0,2)

console.log( `Credito residuo: € ${cliente1.numero404()}`);
console.log(`Numero chiamate: ${cliente1.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${cliente1.numerochiamate}`)

console.log("------------------");

let cliente2 = new secondo(10,5)

console.log(`Credito residuo: € ${cliente2.numero404()}`);
console.log(`Numero chiamate: ${cliente2.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${cliente2.numerochiamate}`);


console.log("------------------");

let cliente3 = new terzo(15,0)
console.log(`Credito residuo: € ${cliente3.numero404()}`);
console.log(`Numero chiamate: ${cliente3.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${cliente3.numerochiamate}`);
///////////////
////////////// sim già esistenti e i form interargiscono con le sim
var sim1 : primo = new primo(0,0);
var sim2 : secondo = new secondo(0,0);;
var sim3 : terzo = new terzo(0,0);
//pulsanti letti da html
//leggi pulsante e input
//Sim1

    var btnSub1=document.getElementById('register1');
   
    var saldoPrimo=document.getElementById('formRicaricaIniziale1')as HTMLInputElement;
    btnSub1?.addEventListener('click',function (){
        sim1.credito = (parseInt(saldoPrimo.value))
console.log(sim1)
     
     
    })

    
    var btnSub2=document.getElementById('btnRicarica1')
    var ricaricaPrimo = document.getElementById('formRicarica1') as HTMLInputElement;
    btnSub2?.addEventListener('click', function() {
        sim1.ricarica(parseInt(ricaricaPrimo.value))
console.log(sim1)
    }) 
    var btnSub3= document.getElementById('btnChiama1');
    var chiamataPrima = document.getElementById('formChiamata1')as HTMLInputElement;
    btnSub3?.addEventListener('click', function(){
        sim1.chiamata(parseInt(chiamataPrima.value))
        console.log(sim1)
    } )
 
var btnsub4=document.getElementById('btn404-1');
 var primCredres =  document.getElementById('print404-1')as HTMLElement;
 btnsub4?.addEventListener('click', function(){
    sim1.credito = (parseInt(saldoPrimo.value))
    console.log(sim1)
    primCredres.innerHTML = `${sim1.credito}`;
})
var btnsub5=document.getElementById('azzeraChiamate1');
 var azzChiam = document.getElementById('azzChiam1')as HTMLElement;
   btnsub5?.addEventListener('click', function(){
    sim1.azzeraChiamate();
    azzChiam.innerHTML = `${sim1.getNumeroChiamate()}`;
    console.log(sim1)
   } )
//Sim2

var btnSubs=document.getElementById('register2');
   
var saldoSec=document.getElementById('formRicaricaIniziale2')as HTMLInputElement;
btnSubs?.addEventListener('click',function (){
    sim2.credito = (parseInt(saldoSec.value))
console.log(sim2)
 
 
})


var btnSubd=document.getElementById('btnRicarica2')
var ricaricaSec = document.getElementById('formRicarica2') as HTMLInputElement;
btnSubd?.addEventListener('click', function() {
    sim2.ricarica(parseInt(ricaricaSec.value))
console.log(sim2)
}) 
var btnSuby= document.getElementById('btnChiama2');
var chiamataSec = document.getElementById('formChiamata2')as HTMLInputElement;
btnSuby?.addEventListener('click', function(){
    sim2.chiamata(parseInt(chiamataSec.value))
    console.log(sim2)
} )

var btnsubu=document.getElementById('btn404-2');
var secCredres =  document.getElementById('print404-2')as HTMLElement;
btnsubu?.addEventListener('click', function(){
sim2.credito = (parseInt(saldoSec.value))
console.log(sim2)
secCredres.innerHTML = `${sim2.credito}`;
})
var btnsubo=document.getElementById('azzeraChiamate2');
var azzChiamsec = document.getElementById('azzChiam2')as HTMLElement;
btnsubo?.addEventListener('click', function(){
sim2.azzeraChiamate();
azzChiamsec.innerHTML = `${sim2.getNumeroChiamate()}`;
console.log(sim2)
} )
//Sim3

var btnSubsim=document.getElementById('register3');
   
var saldoTer=document.getElementById('formRicaricaIniziale3')as HTMLInputElement;
btnSubsim?.addEventListener('click',function (){
    sim3.credito = (parseInt(saldoTer.value))
console.log(sim3)
 
 
})


var btnSubsal=document.getElementById('btnRicarica3')
var ricaricaTer = document.getElementById('formRicarica3') as HTMLInputElement;
btnSubsal?.addEventListener('click', function() {
    sim3.ricarica(parseInt(ricaricaTer.value))
console.log(sim3)
}) 
var btnSubim= document.getElementById('btnChiama3');
var chiamataTer = document.getElementById('formChiamata3')as HTMLInputElement;
btnSubim?.addEventListener('click', function(){
    sim3.chiamata(parseInt(chiamataTer.value))
    console.log(sim3)
} )

var btnsuboz=document.getElementById('btn404-3');
var tercCredres =  document.getElementById('print404-3')as HTMLElement;
btnsuboz?.addEventListener('click', function(){
sim3.credito = (parseInt(saldoTer.value))
console.log(sim3)
tercCredres.innerHTML = `${sim3.credito}`;
})
var btnsubab=document.getElementById('azzeraChiamate3');
var azzChiamter = document.getElementById('azzChiam3')as HTMLElement;
btnsubab?.addEventListener('click', function(){
sim3.azzeraChiamate();
azzChiamter.innerHTML = `${sim3.getNumeroChiamate()}`;
console.log(sim3)
} )
