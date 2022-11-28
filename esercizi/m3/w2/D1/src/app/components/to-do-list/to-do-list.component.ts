import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  datas!: Todo[];

  ngOnInit() {
    fetch( 'assets/todo.json').then((response)=> response.json()).then((data) => {
      this.datas = data;
      console.log(data);
    })
  }

}
