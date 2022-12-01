import { Injectable } from '@angular/core';
import { Post } from './post';

//VERSIONE VAR E FUNZIONI
var posts: Post[] = []

export function fetchPosts() {
  fetch('assets/db.json').then(res => res.json()).then((res: Post[]) => {
      console.log(res);
      posts = res
    })
}

export function getPosts() {
  return posts
}

export function getPostFiltered(a:boolean) {
  let arrFiltrato = posts.filter((e)=>{return (e.active == a)});
  return arrFiltrato;
}

export function attivaPost(id:number) {
  console.log("id", id);

  let indexPostDaAttivare = posts.findIndex((e)=>{
    console.log(e);
    return e.id == id

  })
  if(!indexPostDaAttivare){
    throw new Error("Post non trovato")
  }
  posts[indexPostDaAttivare].active = true

  fetch('assets/db.json'+id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(posts[indexPostDaAttivare])
  })

}
export function disattivaPost(id:number) {
  let indexPostDaAttivare = posts.findIndex((e)=>{
    return e.id == id

  })


  if(indexPostDaAttivare==undefined){
    throw new Error("Post non trovato")
  }
  posts[indexPostDaAttivare].active = false

  fetch('assets/db.json'+id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(posts[indexPostDaAttivare])
  })

}

//VERSIONE CLASSE
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  posts:Post[] = []

  fetchPosts() {
    fetch('assets/db.json').then(res => res.json()).then((res: Post[]) => { this.posts = res })
  }

  getPosts() {
    return this.posts
  }

  getPostFiltered(a:boolean) {
    let arrFiltrato = this.posts.filter((e)=>{return (e.active == a)});
    return arrFiltrato;
  }
}
