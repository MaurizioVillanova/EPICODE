import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  datas: Todo[] = []

  ngOnInit() {// si mette il codice iniziale che si applicano quando la pagina viene caricata
    fetch('https://jsonplaceholder.typicode.com/todos').then((response)=> response.json()).then((data) => {
      this.datas = data;
      console.log(data);
    })
  }

}
