import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from './interface/album';
import { PhotoService } from './services/photo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd1';

}
