import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  currentCounter = 0;
  
  constructor() { }

  ngOnInit() {
  }

  counterChangedHandler(counter: number): void {
    this.currentCounter = counter;
  }
}
