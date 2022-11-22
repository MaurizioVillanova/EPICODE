abstract class Lavoratore {
   nome: string;
   cognome: string;
   codicered: number;
    constructor (_nome: string, _cognome: string, _codicered: number) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.codicered = _codicered;
    }

  

   }


class Pagamtasse extends Lavoratore {
    redditoproprio:number;
    tasseInps:number;
    tasseIrpef:number;
    constructor (_nome: string, _cognome: string, _codicered: number, _redditoproprio:number, _tasseInps:number, _tasseIrpef:number) {
        super (_nome, _cognome, _codicered);
        this.redditoproprio = _redditoproprio;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    getUtileTasse(): number {
      return (this.redditoproprio*this.codicered/100)
};
getTasseInps(): number {
    return (this.getUtileTasse()* this.tasseInps/100)
};
getTasseIrpef(): number {
    return (this.getUtileTasse()*this.tasseIrpef/100)
};
getRedditoAnnuoNetto():number {
   return  (this.redditoproprio -(this.tasseInps+this.tasseIrpef))
}
}
let artigiano = new Pagamtasse ('Maurizio', 'Villanova', 77, 1800, 281, 230 );
console.log(artigiano.getUtileTasse(), artigiano.getTasseInps(), artigiano.getTasseIrpef(), artigiano.getRedditoAnnuoNetto());
let professionista = new Pagamtasse ('Marta', 'Liguori', 78, 2200, 330, 240 );
console.log(professionista.getUtileTasse(), professionista.getTasseInps(), professionista.getTasseIrpef(), professionista.getRedditoAnnuoNetto());
let commerciante = new Pagamtasse ('Giulio', 'Tomé', 40, 1900, 250, 230);
console.log(commerciante.getUtileTasse(), commerciante.getTasseInps(), commerciante.getTasseIrpef(), commerciante.getRedditoAnnuoNetto());