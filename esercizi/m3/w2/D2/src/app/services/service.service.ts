import { Interfaccia } from "../modules/interfaccia";

export async function  getInterfaccia():Promise<Interfaccia[]> {
  return await (await fetch('assets/db.json')).json()

}

export class ServiceService {

  constructor() { }
  getLettura(active:boolean = false){
    let x = getInterfaccia();
   return x.then((y)=>{
      let p = y.filter((e)=>{
         if( e.active ==true)
         {return true}else{return false }
      })
      return p;
    })
  }

    }

