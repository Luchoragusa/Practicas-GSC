import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Welcome } from './film';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getFilms() : Observable<Welcome> {
    return this.http.get<Welcome>(`${this.url}`);
  }

}
