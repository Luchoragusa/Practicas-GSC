import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetailsComponent } from '../event-details/event-details/event-details.component';
import { EventsService } from '../services/events.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private event:EventsService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(route.paramMap.get('id') && this.event.getOne(route.paramMap.get('id'))){
        return true
      }else{
        console.log('No existe el evento')
        return false
      }
  }

  canDeactivate(
    component: EventDetailsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (component.reviewed) {
        return true
      } else {
        console.log('No has revisado el evento')
        return false
      }

  }
}
