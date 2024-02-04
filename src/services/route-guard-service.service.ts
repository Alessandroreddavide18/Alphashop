import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthappService } from './authapp.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private BasicAuth: AuthappService, private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.BasicAuth.islogged()) {
      this.route.navigate(['login'], { queryParams: { message: "Devi accedere per visualizzare questa pagina" } });
      return false;
    } else {
      return true;
    }
  }
}
