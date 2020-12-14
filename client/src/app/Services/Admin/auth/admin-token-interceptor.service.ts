import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminAuthServiceService } from './admin-auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AdminTokenInterceptorService implements HttpInterceptor{

  constructor(private _adminAuth : AdminAuthServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization : `Bearer ${this._adminAuth.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
