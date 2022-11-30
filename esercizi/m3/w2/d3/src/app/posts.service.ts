import { Post } from "./models/post"
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
