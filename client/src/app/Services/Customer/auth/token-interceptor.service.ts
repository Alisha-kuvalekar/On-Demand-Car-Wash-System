import { Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../Washer/auth/auth.service';
import { customerBaseURL, washerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private _authService : AuthServiceService, private _washerAuth : AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /* for all customer services */
    if(req.url.startsWith(customerBaseURL)){
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization : `Bearer ${this._authService.getToken()}`
        }
      })
      return next.handle(tokenizedReq);
    }
    
    /* For all washer services */
    if(req.url.startsWith(washerBaseURL)){
      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization : `Bearer ${this._washerAuth.getToken()}`
        }
      })
      return next.handle(tokenizedReq);
    }
    
    
  }
}
