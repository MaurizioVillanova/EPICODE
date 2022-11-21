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
var bank = /** @class */ (function () {
    function bank(_prelievo, _deposito, _contoCorrente) {
        this.prelievo = _prelievo;
        this.deposito = _deposito;
        this.contoCorrente = _contoCorrente;
    }
    bank.prototype.prelevare = function () {
        return this.contoCorrente = this.contoCorrente - this.prelievo;
    };
    bank.prototype.depositare = function () {
        return this.contoCorrente = this.contoCorrente + this.deposito;
    };
    bank.prototype.interessi = function () {
        return this.contoCorrente = this.contoCorrente + this.contoCorrente * 0.10;
    };
    bank.prototype.prelievosecondo = function () {
        return this.contoCorrente = this.contoCorrente - 5000;
    };
    return bank;
}());
var MauriBank = new bank(100, 200, 20000);
console.log(MauriBank);
console.log(MauriBank.interessi());
console.log(MauriBank.prelevare());
console.log(MauriBank.depositare());
console.log(MauriBank.prelievosecondo());
var bankdue = /** @class */ (function (_super) {
    __extends(bankdue, _super);
    function bankdue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return bankdue;
}(bank));
var MauriBankdue = new bank(1000, 2000, 2000000);
console.log(MauriBankdue);
console.log(MauriBankdue.interessi());
console.log(MauriBankdue.prelevare());
console.log(MauriBankdue.depositare());
console.log(MauriBankdue.prelievosecondo());
