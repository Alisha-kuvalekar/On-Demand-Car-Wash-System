import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';;

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private _authService : AuthService) { }
}
