import { BrowserModule } from '@angular/platform-browser';
import { Directive, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { HideDirective } from './hide.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    HideDirective, 
    Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
