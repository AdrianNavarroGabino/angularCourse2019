// Adrián Navarro Gabino

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EventAddComponent } from '../event-add/event-add.component';
import { ComponentDeactivate } from 'interfaces/component-deactivate';

@Injectable({
  providedIn: 'root'
})
export class SaveChangesGuard implements CanDeactivate<EventAddComponent> {
  canDeactivate(
    component: ComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeativate ? component.canDeativate() : true;
  }
  
}
