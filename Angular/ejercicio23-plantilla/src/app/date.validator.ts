import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
import { Directive, OnInit} from '@angular/core';


@Directive({
  selector: '[dateValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: dateValidatorDirective, multi: true }
  ]
})
export class dateValidatorDirective implements Validator, OnInit {

  ngOnInit() {
  }

  validate(c: FormControl) {

    let v: number = new Date(c.value).getDay();

     if (isNaN(v)) {
      return { 'date': true, 'requiredValue': 'El dato no es una Fecha' }
    }
    if (v == 5 || v == 6) {
      return { 'date': true,'requiredValue': 'Sabado ni Domingo' }
    }

    return null;
  }
}
