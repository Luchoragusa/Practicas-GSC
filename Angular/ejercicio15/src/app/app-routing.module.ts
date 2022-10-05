import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details/event-details.component';
import { GuardGuard } from './guards/guard.guard';



const routes: Routes = [
  { path: 'eventlist', component: EventsListComponent, children: [
      {path: 'details/:id', component: EventDetailsComponent, canActivate: [GuardGuard], canDeactivate: [GuardGuard]}
  ] },
  { path: '', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
})
export class AppRoutingModule { }
