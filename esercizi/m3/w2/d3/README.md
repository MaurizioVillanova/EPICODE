# epicode-esercizi

1) db.json: aggiungere il tipo a tutti gli oggetti

{
        "id":1,
        "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        "active":true,
        "type": "education"
    }

2) interfaccia: aggiungere il tipo all'interfaccia, indifferentemente stringa o tipo definito

export interface Post{
    id:number,
    title:string,
    body:string,
    active:boolean,
    type: 'news' | 'politic' | 'education' oppure type: string
}

3) nel service aggiungere un metodo per la modifica dei post

4) active-posts chiamerà il metodo di modifica cambiando la proprietà active da true a false

5) inactive-posts chiamerà il metodo di modifica cambiando la proprietà active da false a true

6) l'HTML di post-card conterrà la direttiva built-in [ngclass] per aassegnare colori alle card in funzione del loro tipo

[ngClass]="{
        'bg-warning': post.type == 'news',
        'bg-info': post.type == 'education',
        'bg-dark': post.type == 'politic',
        'text-white': post.type == 'politic'
      }"
