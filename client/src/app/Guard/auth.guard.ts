import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/Customer/auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private  _authService : AuthServiceService,
              private _router : Router){}

  canActivate():boolean{
    if(this._authService.loggedIn()){
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
  
}
