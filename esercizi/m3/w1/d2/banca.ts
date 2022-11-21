class bank{
    prelievo:number;
    deposito:number;
    contoCorrente:number;
    constructor(_prelievo:number,_deposito:number,_contoCorrente:number){
        this.prelievo=_prelievo;
        this.deposito=_deposito;
        this.contoCorrente=_contoCorrente;
    }
    public prelevare():number{
        return this.contoCorrente=this.contoCorrente-this.prelievo;
    }
    public depositare():number{
        return this.contoCorrente=this.contoCorrente+this.deposito;
    }
    private interessi():number{
        return this.contoCorrente=this.contoCorrente+this.contoCorrente*0.10;

}
private prelievosecondo():number{
    return this.contoCorrente=this.contoCorrente - 5000;
}
}
let MauriBank:any= new bank(100, 200, 20000);
console.log(MauriBank);
console.log(MauriBank.interessi());
console.log(MauriBank.prelevare());
console.log(MauriBank.depositare());
console.log(MauriBank.prelievosecondo())
class bankdue extends bank{

}
let MauriBankdue:any= new bank(1000, 2000, 2000000);
console.log(MauriBankdue);
console.log(MauriBankdue.interessi())
console.log(MauriBankdue.prelevare());
console.log(MauriBankdue.depositare());
console.log(MauriBankdue.prelievosecondo())
