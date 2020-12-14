import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AdminAuthServiceService } from '../Services/Admin/auth/admin-auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(private router: Router,
              private _adminAuth : AdminAuthServiceService){}

              canActivate():boolean{
                if(this._adminAuth.loggedIn()){
                  return true;
                } else {
                  this.router.navigate(['/admin']);
                  return false;
              }
            }
}
