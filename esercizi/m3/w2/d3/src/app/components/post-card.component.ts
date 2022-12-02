import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { getPosts } from '../posts.service';
@Component({
  selector: 'app-post-card',
  template: `
    <div
    [ngClass]="{
        'bg-warning': posts.type == 'news',
        'bg-info': posts.type == 'education',
        'bg-dark': posts.type == 'politic',
        'text-white': posts.type == 'politic'
      }"
      class="card mb-4"
      >
      <h5 class="card-header">Post</h5>
      <div class="card-body">
      <h5 class=" card-title">{{ posts.title}}</h5>

      <p class= "card-text">
      {{posts.body}}
    </p>
    <ng-content></ng-content><!-- INIEZIONE DI CONTENUTO
    </div>
    </div>
    `,
    
  styles: [
  ]
})
export class PostCardComponent implements OnInit {
  @Input() posts!: Post;
  @Input() bgColor!: string;
  constructor() {

  }

  ngOnInit(): void {
  }

}

