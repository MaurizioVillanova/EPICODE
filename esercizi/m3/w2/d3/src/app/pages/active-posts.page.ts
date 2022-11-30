import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { getPosts, updatePosts } from '../posts.service';

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts; let i = index">
        <app-post-card [posts]="post" *ngIf="!post.active">
          <button (click)="onActivePost(post.id, i)" class="btn btn-primary">
            Attiva
          </button>
        </app-post-card>
      </div>
    </div>
    ` ,
  styles: [],
})
export class ActivePostsPage implements OnInit {
  posts!: Post[];
  constructor() {
    getPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {
  }

  onActivePost(id: number, i:number){
    updatePosts({'active': true}, id);
    this.posts.splice(i, 1);
  }
}
