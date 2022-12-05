import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Album } from 'src/app/interface/album';
import { PhotoService } from 'src/app/services/photo.service';
import{ Subscription} from 'rxjs'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  sub!: Subscription;

  photos: Album[] = [];

  constructor(private http: HttpClient, private photoSrv: PhotoService) { }

  ngOnInit(): void {
    this.stampaFoto();
  }


  stampaFoto() {
   this.sub = this.photoSrv.getPhoto()
    .subscribe((ris) => {
      console.log(ris);
      this.photos = ris;
    });
  }
}
