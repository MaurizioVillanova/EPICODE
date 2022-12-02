import { Injectable } from '@angular/core';
import { Post } from './post';
import { Utente } from './utente';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  fetchUser(autore:string) {
    fetch("http://localhost:3000/users"+ autore).then(res=>res.json()).then(res=>{
      this.user = res
    })
    return this.user
  }
  private posts:Post[] = []
  user!:Utente
  //i dati che vengono letti quando carichiamo una delle pagine

  constructor() { }

  fetchData() {
    fetch("http://localhost:3000/posts").then(res=>res.json()).then(res=>{
      this.posts = res
    })
  }

  getPostsFiltrati(a:boolean) {
    return this.posts.filter(p=>p.active==a)
  }

  private toggleServicePost(id:number) {
    console.log("toggle", id);

    this.posts = this.posts.map((e)=>{
      if(e.id == id) {
        console.log(e, e.active);
        e.active = !e.active
      }
      return e
    })
    console.log(this.posts);

  }

  toggleDbPost(id:number) {

    let postDiArray = this.posts.find(p=>p.id==id)
    let postClone = {...postDiArray}
    if(postDiArray == undefined) {
      throw new Error("Elemento non trovato")
    }

    postClone.active = !postClone.active

    return fetch("http://localhost:3000/posts/"+id, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postClone)
    }).then((res)=>{
      if(res.ok) {
        this.toggleServicePost(id)
      } else {
        console.log("err");
      }
      return res
    })
  }

  deleteDb(id:number) {
    return fetch("http://localhost:3000/posts/"+id, {
      method:"DELETE"
    }).then(res=>{
      if(res.ok) {
        this.deleteService(id)
      }
      return res
    })
  }

  private deleteService(id:number) {
    this.posts = this.posts.filter(e=>e.id != id)
  }
}


  export async function getPosts(){

    return await (await fetch('assets/db.json')).json()
 }
 var posts:Post[]=[]
  function assegnaPost (){
 getPosts().then((res)=>{
 posts = res;
 })
  }
 export function ottieniPost(){
   return posts;
 }
 export function updatePosts(data:Partial<Post>, id: number){
   getPosts().then((post) => {
     post = posts.map(post => post.id == id? {...post, ...data} : post)
     return posts.find(post => post.id == id) as Post})
 }



/*import { Post } from "./models/post"
export async function getPosts(){

   return await (await fetch('assets/db.json')).json()
}
var posts:Post[]=[]
 function assegnaPost (){
getPosts().then((res)=>{
posts = res;
})
 }
export function ottieniPost(){
  return posts;
}
export function updatePosts(data:Partial<Post>, id: number){
  getPosts().then((post) => {
    post = posts.map(post => post.id == id? {...post, ...data} : post)
    return posts.find(post => post.id == id) as Post})
}
*/


