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
var bank1 = /** @class */ (function () {
    function bank1(_prelievo, _deposito, _contoCorrente) {
        this.prelievo = _prelievo;
        this.deposito = _deposito;
        this.contoCorrente = _contoCorrente;
    }
    bank1.prototype.prelevare = function () {
        return this.contoCorrente = this.contoCorrente - this.prelievo;
    };
    bank1.prototype.depositare = function () {
        return this.contoCorrente = this.contoCorrente + this.deposito;
    };
    bank1.prototype.interessi = function () {
        return this.contoCorrente = this.contoCorrente + this.contoCorrente * 0.10;
    };
    return bank1;
}());
var bank2 = /** @class */ (function (_super) {
    __extends(bank2, _super);
    function bank2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bank2.prototype.interessi = function () {
        console.log('noooo');
    };
    return bank2;
}(bank1));
var MauriBank = new bank1(100, 200, 20000);
console.log(MauriBank);
console.log(MauriBank.interessi());
console.log(MauriBank.prelevare());
console.log(MauriBank.depositare());
var MauriBank2 = new bank2(200, 400, 1000000000);
console.log(MauriBank2);
console.log(MauriBank2.depositare());
console.log(MauriBank2.prelevare());
console.log(MauriBank2.interessi());
console.log(MauriBank2.prelevare());
