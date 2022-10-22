import { Component, OnInit } from '@angular/core';
import { Film, Welcome } from '../film';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movieList: Film[] = []; // Corregir

  constructor(private service: FilmsService) { }

  ngOnInit() {
  }

  makeRequest() {
    this.service.getFilms().subscribe((data: Welcome) => {
      this.movieList = data.results;
      console.log(data.results);  
    });
  }
}
