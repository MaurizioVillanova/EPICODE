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
var Lavoratore = /** @class */ (function () {
    function Lavoratore(_nome, _cognome, _codicered) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.codicered = _codicered;
    }
    return Lavoratore;
}());
var Pagamtasse = /** @class */ (function (_super) {
    __extends(Pagamtasse, _super);
    function Pagamtasse(_nome, _cognome, _codicered, _redditoproprio, _tasseInps, _tasseIrpef) {
        var _this = _super.call(this, _nome, _cognome, _codicered) || this;
        _this.redditoproprio = _redditoproprio;
        _this.tasseInps = _tasseInps;
        _this.tasseIrpef = _tasseIrpef;
        return _this;
    }
    Pagamtasse.prototype.getUtileTasse = function () {
        return (this.redditoproprio * this.codicered / 100);
    };
    ;
    Pagamtasse.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseInps / 100);
    };
    ;
    Pagamtasse.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseIrpef / 100);
    };
    ;
    Pagamtasse.prototype.getRedditoAnnuoNetto = function () {
        return (this.redditoproprio - (this.tasseInps + this.tasseIrpef));
    };
    return Pagamtasse;
}(Lavoratore));
var artigiano = new Pagamtasse('Maurizio', 'Villanova', 77, 1800, 281, 230);
console.log(artigiano.getUtileTasse(), artigiano.getTasseInps(), artigiano.getTasseIrpef(), artigiano.getRedditoAnnuoNetto());
var professionista = new Pagamtasse('Marta', 'Liguori', 78, 2200, 330, 240);
console.log(professionista.getUtileTasse(), professionista.getTasseInps(), professionista.getTasseIrpef(), professionista.getRedditoAnnuoNetto());
var commerciante = new Pagamtasse('Giulio', 'Tomé', 40, 1900, 250, 230);
console.log(commerciante.getUtileTasse(), commerciante.getTasseInps(), commerciante.getTasseIrpef(), commerciante.getRedditoAnnuoNetto());
