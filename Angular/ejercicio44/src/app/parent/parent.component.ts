import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  appid = "69bc9bb1bbaa496601358677ea57a017";
  forecast !: string;
  city !: string;

  constructor( private http : HttpClient) { }

  ngOnInit() {
  }

  makeRequest() {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&APPID=" + this.appid;
    this.http.get(url).subscribe((data: any) => {
      this.forecast = data.weather[0].main;
    });
  }

}

