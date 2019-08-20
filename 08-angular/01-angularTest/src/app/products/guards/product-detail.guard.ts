// Adrián Navarro Gabino

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      const id = +next.params['id'];
      if(isNaN(id) || id < 1) {
        alert('Invalid product id!');
        this.router.navigate(['/products']);
        return false;
      }
      return true;
  }
  
}
