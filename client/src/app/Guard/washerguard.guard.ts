import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/Washer/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class WasherguardGuard implements CanActivate {
  
  constructor(private  _authService : AuthService,
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
