var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var primo = /** @class */ (function () {
    function primo(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
        this.tariffa = 0.20;
    }
    primo.prototype.ricarica = function (valore) { return this.credito = this.credito + valore; };
    ;
    primo.prototype.chiamata = function (minuti) { this.credito = this.credito - (minuti * this.tariffa); this.numerochiamate++; };
    ;
    primo.prototype.numero404 = function () { return this.credito; };
    ;
    primo.prototype.getNumeroChiamate = function () { return this.numerochiamate; };
    ;
    primo.prototype.azzeraChiamate = function () { this.numerochiamate = 0; };
    ;
    return primo;
}());
var secondo = /** @class */ (function (_super) {
    __extends(secondo, _super);
    function secondo(_credito, _numeroChiamate) {
        var _this = _super.call(this, _credito, _numeroChiamate) || this;
        _this.tariffa = 0.35;
        return _this;
    }
    return secondo;
}(primo));
var terzo = /** @class */ (function (_super) {
    __extends(terzo, _super);
    function terzo(_credito, _numeroChiamate) {
        var _this = _super.call(this, _credito, _numeroChiamate) || this;
        _this.tariffa = 0.30;
        return _this;
    }
    return terzo;
}(primo));
var cliente1 = new primo(0, 2);
console.log("Credito residuo: \u20AC ".concat(cliente1.numero404()));
console.log("Numero chiamate: ".concat(cliente1.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(cliente1.numerochiamate));
console.log("------------------");
var cliente2 = new secondo(10, 5);
console.log("Credito residuo: \u20AC ".concat(cliente2.numero404()));
console.log("Numero chiamate: ".concat(cliente2.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(cliente2.numerochiamate));
console.log("------------------");
var cliente3 = new terzo(15, 0);
console.log("Credito residuo: \u20AC ".concat(cliente3.numero404()));
console.log("Numero chiamate: ".concat(cliente3.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(cliente3.numerochiamate));
///////////////
////////////// sim già esistenti e i form interargiscono con le sim
var sim1 = new primo(0, 0);
var sim2 = new secondo(0, 0);
;
var sim3 = new terzo(0, 0);
//pulsanti letti da html
//leggi pulsante e input
//Sim1
var btnSub1 = document.getElementById('register1');
var saldoPrimo = document.getElementById('formRicaricaIniziale1');
btnSub1 === null || btnSub1 === void 0 ? void 0 : btnSub1.addEventListener('click', function () {
    sim1.credito = (parseInt(saldoPrimo.value));
    console.log(sim1);
});
var btnSub2 = document.getElementById('btnRicarica1');
var ricaricaPrimo = document.getElementById('formRicarica1');
btnSub2 === null || btnSub2 === void 0 ? void 0 : btnSub2.addEventListener('click', function () {
    sim1.ricarica(parseInt(ricaricaPrimo.value));
    console.log(sim1);
});
var btnSub3 = document.getElementById('btnChiama1');
var chiamataPrima = document.getElementById('formChiamata1');
btnSub3 === null || btnSub3 === void 0 ? void 0 : btnSub3.addEventListener('click', function () {
    sim1.chiamata(parseInt(chiamataPrima.value));
    console.log(sim1);
});
var btnsub4 = document.getElementById('btn404-1');
var primCredres = document.getElementById('print404-1');
btnsub4 === null || btnsub4 === void 0 ? void 0 : btnsub4.addEventListener('click', function () {
    sim1.credito = (parseInt(saldoPrimo.value));
    console.log(sim1);
    primCredres.innerHTML = "".concat(sim1.credito);
});
var btnsub5 = document.getElementById('azzeraChiamate1');
var azzChiam = document.getElementById('azzChiam1');
btnsub5 === null || btnsub5 === void 0 ? void 0 : btnsub5.addEventListener('click', function () {
    sim1.azzeraChiamate();
    azzChiam.innerHTML = "".concat(sim1.getNumeroChiamate());
    console.log(sim1);
});
//Sim2
var btnSubs = document.getElementById('register2');
var saldoSec = document.getElementById('formRicaricaIniziale2');
btnSubs === null || btnSubs === void 0 ? void 0 : btnSubs.addEventListener('click', function () {
    sim2.credito = (parseInt(saldoSec.value));
    console.log(sim2);
});
var btnSubd = document.getElementById('btnRicarica2');
var ricaricaSec = document.getElementById('formRicarica2');
btnSubd === null || btnSubd === void 0 ? void 0 : btnSubd.addEventListener('click', function () {
    sim2.ricarica(parseInt(ricaricaSec.value));
    console.log(sim2);
});
var btnSuby = document.getElementById('btnChiama2');
var chiamataSec = document.getElementById('formChiamata2');
btnSuby === null || btnSuby === void 0 ? void 0 : btnSuby.addEventListener('click', function () {
    sim2.chiamata(parseInt(chiamataSec.value));
    console.log(sim2);
});
var btnsubu = document.getElementById('btn404-2');
var secCredres = document.getElementById('print404-2');
btnsubu === null || btnsubu === void 0 ? void 0 : btnsubu.addEventListener('click', function () {
    sim2.credito = (parseInt(saldoSec.value));
    console.log(sim2);
    secCredres.innerHTML = "".concat(sim2.credito);
});
var btnsubo = document.getElementById('azzeraChiamate2');
var azzChiamsec = document.getElementById('azzChiam2');
btnsubo === null || btnsubo === void 0 ? void 0 : btnsubo.addEventListener('click', function () {
    sim2.azzeraChiamate();
    azzChiamsec.innerHTML = "".concat(sim2.getNumeroChiamate());
    console.log(sim2);
});
//Sim3
var btnSubsim = document.getElementById('register3');
var saldoTer = document.getElementById('formRicaricaIniziale3');
btnSubsim === null || btnSubsim === void 0 ? void 0 : btnSubsim.addEventListener('click', function () {
    sim3.credito = (parseInt(saldoTer.value));
    console.log(sim3);
});
var btnSubsal = document.getElementById('btnRicarica3');
var ricaricaTer = document.getElementById('formRicarica3');
btnSubsal === null || btnSubsal === void 0 ? void 0 : btnSubsal.addEventListener('click', function () {
    sim3.ricarica(parseInt(ricaricaTer.value));
    console.log(sim3);
});
var btnSubim = document.getElementById('btnChiama3');
var chiamataTer = document.getElementById('formChiamata3');
btnSubim === null || btnSubim === void 0 ? void 0 : btnSubim.addEventListener('click', function () {
    sim3.chiamata(parseInt(chiamataTer.value));
    console.log(sim3);
});
var btnsuboz = document.getElementById('btn404-3');
var tercCredres = document.getElementById('print404-3');
btnsuboz === null || btnsuboz === void 0 ? void 0 : btnsuboz.addEventListener('click', function () {
    sim3.credito = (parseInt(saldoTer.value));
    console.log(sim3);
    tercCredres.innerHTML = "".concat(sim3.credito);
});
var btnsubab = document.getElementById('azzeraChiamate3');
var azzChiamter = document.getElementById('azzChiam3');
btnsubab === null || btnsubab === void 0 ? void 0 : btnsubab.addEventListener('click', function () {
    sim3.azzeraChiamate();
    azzChiamter.innerHTML = "".concat(sim3.getNumeroChiamate());
    console.log(sim3);
});
