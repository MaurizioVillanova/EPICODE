import { Injectable } from '@angular/core';
import { Album } from '../interface/album';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient, ) { }
  getPhoto() {
   return this.http.get<{data: Album[]}>(' http://localhost:3000/raccolta').pipe(map(ris => ris.data))
  }
}
