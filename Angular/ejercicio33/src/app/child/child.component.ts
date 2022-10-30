import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() quantity;
  squaredQuantity: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) { // SimpleChanges es un objeto que contiene los cambios que se han producido en las propiedades de entrada
    this.squaredQuantity = this.quantity * this.quantity;
  }

}
