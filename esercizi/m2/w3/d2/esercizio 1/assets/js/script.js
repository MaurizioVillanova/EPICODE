  class Person{
    constructor(_nome, _eta){
    this.nome = _nome;
    this.eta = _eta;
  }
  confronto(altro){
    if (this.eta < altro.eta){
        console.log(`${this.nome} è più giovane di ${altro.nome}`)
        }  if(this.eta == altro.eta){
            console.log(`${this.nome} è della stessa età di ${altro.nome}`)
    }if(this.eta> altro.eta){
        console.log(`${this.nome} è più vecchio di ${altro.nome}`)
    }
  }
}
let p1 = new Person ("Paolo", 28);
let p2 = new Person ("Luca", 24);
let p3 = new Person ("Silvano", 24);
p1.confronto(p2);
p2.confronto(p3);
p3.confronto(p1);