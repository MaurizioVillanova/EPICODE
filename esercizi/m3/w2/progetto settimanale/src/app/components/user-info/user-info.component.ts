import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Utente } from 'src/app/utente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user!:Utente
  autore!: string
  constructor(private router:ActivatedRoute, private postSrv: PostService) { }

  ngOnInit() {
    this.router.params.subscribe(params=>{
      const autore = params['autore']
   //parametro va leggere nell'url
    this.user = this.postSrv.fetchUser(autore)

  })
return this.user

}

}
