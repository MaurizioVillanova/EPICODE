abstract class Lavoratore {
    codredd: number;
    reddito: number;
    tasseInps: number;
    tasseIrpef: number;
    constructor(_reddito: number, a: number, b: number, c: number) {
        this.reddito = _reddito;
        this.codredd = a;
        this.tasseInps = b;
        this.tasseIrpef = c;
    }

    getUtileTasse(): number {
        return this.reddito * (this.codredd / 100)
    }
    getTasseIrpef(): number {
        return this.getUtileTasse() * (this.tasseIrpef / 100)
    }
    getTasseInps(): number {
        return this.getUtileTasse() * (this.tasseInps / 100)
    }

    abstract getRedditoNetto(): number

}

class Commerciante extends Lavoratore {
    constructor(_reddito: number) {
        super(_reddito, 40, 10, 14)
    }
    getRedditoNetto(): number {
        return this.reddito - (this.getTasseInps() * 3)
    }
}
class Professionista extends Lavoratore {
    constructor(_reddito: number) {
        super(_reddito, 78, 14, 16)
    }
    getRedditoNetto(): number {
        return this.reddito - (this.getTasseIrpef() * 2)
    }
}
class Artigiano extends Lavoratore {
    constructor(_reddito: number) {
        super(_reddito, 32, 12, 10)
    }
    getRedditoNetto(): number {
        return this.reddito - (this.getTasseInps() * this.getTasseIrpef())
    }
}
class Dipendente extends Lavoratore {
    constructor(_reddito: number) {
        super(_reddito, 32, 12, 10)
    }
    getRedditoNetto(): number {
        return this.reddito - (this.getTasseInps() * 2)
    }
}
class LiberoProfessionsta extends Lavoratore {
    getRedditoNetto(): number {
        return this.reddito - (this.getTasseInps() * 2)
    }
    constructor(_reddito: number) {
        super(_reddito, 60, 14, 25)
    }
}



///
let c1 = new Commerciante(23000);
let c2 = new Commerciante(28000);
let p1 = new Professionista(40000);
let p2 = new Professionista(30000);

let lp = new LiberoProfessionsta(34000);

let lavoratori = [c1, c2, p1, p2, lp]

lavoratori.forEach(element => {
    element.getRedditoNetto();
});

c1.getTasseInps()
p1.getTasseInps()


function calcolo(a, b, c, d, e) {
    return a + b * c - d * (e / 2)
}

let x = calcolo(4, 5, 7, 6, 10)
let y = 7 + 25 * 47 - 16 * (120 / 2)
let z = 10 + 8


////////
enum professione {
    Commerciante,
    Professionista,
    Artigiano
}

let lr = new Lavortor(23000, professione.Commerciante)
let lr1 = new Lavortor(25000, professione.Professionista)
let lr2 = new Lavortor(26000, professione.Artigiano)
let lr3 = new Lavortor(27000, professione.Commerciante)
let lr4 = new Lavortor(28000, professione.Commerciante)
let lr5 = new Lavortor(29000, professione.Commerciante)

class Lavortor {
    codredd: number;
    reddito: number;
    tasseInps: number;
    tasseIrpef: number;
    prof: professione;
    constructor(_reddito: number, p: professione) {
        this.reddito = _reddito;
        this.prof = p
        switch (p) {
            case professione.Commerciante:
                this.codredd = 40;
                this.tasseInps = 12;
                this.tasseIrpef = 14;
                break;
            case professione.Professionista:
                this.codredd = 78;
                this.tasseInps = 14;
                this.tasseIrpef = 16;
                break;

            default:
                break;
        }

    }

    getUtileTasse(): number {
        return this.reddito * (this.codredd / 100)
    }
    getTasseIrpef(): number {
        return this.getUtileTasse() * (this.tasseIrpef / 100)
    }
    getTasseInps(): number {
        return this.getUtileTasse() * (this.tasseInps / 100)
    }

    getRedditoNetto():number {
        switch (this.prof) {
            case professione.Artigiano:
                return return this.reddito - (this.getTasseInps() * 2)
                break
            case professione.Commerciante:
                return return this.reddito - (this.getTasseInps() * 2)
                break
        }
    }
}