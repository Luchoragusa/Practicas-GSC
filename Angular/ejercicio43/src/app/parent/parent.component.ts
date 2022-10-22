import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map }  from  'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  subject;
  output: string[] = [];
  
  
  constructor() {
    this.subject = new Subject<string>(); // le pongo el <string> para que sepa que tipo de dato va a recibir el subject
  }

  ngOnInit(): void {
    this.subject.pipe(
      map((key) => key.toUpperCase())) // aca se transforma el valor que se recive del subject a mayuscula

      .subscribe(key =>  // aca se suscribe al subject y se guarda el valor en el array output
        {
          this.output.push(key);
          console.log(this.output);
        });
  }

  keypress(e: any): void {
    this.subject.next(e.key); // aca se guarda el valor de la tecla presionada en el subject
  } 
}

