import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/utente';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:Utente[]=[]

  constructor( private route : ActivatedRoute){ }

  ngOnInit(): void {
    this.fetchUsers()

  }

  fetchUsers() {
    fetch("http://localhost:3000/users").then(res=>res.json()).then(res=>{
      this.users = res

    })

  }




}
