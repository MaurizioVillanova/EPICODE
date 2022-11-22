class bank1{
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
    public interessi():any{
        return this.contoCorrente=this.contoCorrente+this.contoCorrente*0.10;

}}
class bank2 extends bank1{

       public interessi():void{

            console.log('noooo')

        }
    }
let MauriBank= new bank1(100, 200, 20000);
console.log(MauriBank);
console.log(MauriBank.interessi());
console.log(MauriBank.prelevare());
console.log(MauriBank.depositare());
let MauriBank2=new bank2(200,400,1000000000);
console.log(MauriBank2);
console.log(MauriBank2.depositare())
console.log(MauriBank2.prelevare());
console.log(MauriBank2.interessi());
console.log(MauriBank2.prelevare());

 