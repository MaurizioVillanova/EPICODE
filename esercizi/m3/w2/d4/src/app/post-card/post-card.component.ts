import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { attivaPost, getPosts } from '../post-service.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {


  @Input() p!:Post
  @Input() bgColor!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
