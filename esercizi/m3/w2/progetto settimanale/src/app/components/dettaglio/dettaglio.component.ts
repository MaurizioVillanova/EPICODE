import { Component, OnInit, Input, Output } from '@angular/core';
import { Post , } from 'src/app/post';
import { getPosts } from 'src/app/post.service';
@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {
  @Input() p!:Post

  constructor() { }

  ngOnInit(): void {
  }

}
