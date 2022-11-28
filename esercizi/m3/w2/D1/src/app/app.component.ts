import { Component } from '@angular/core';
import { Todo } from './models/todo';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day1';
  datas : Todo[] = [];
}
