import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ConnectService } from '../service/connect.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.connect.isLoggedIn)
    {
      return true;
    }
    return this.router.createUrlTree(['login']);
  }

  constructor(private router:Router, private connect: ConnectService){}
  
}
