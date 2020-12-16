import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { customerBaseURL } from 'src/environments/environment';

import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http : HttpClient, private router : Router) { }

  /* Register a customer */
  registerCustomer(user): Observable<any>{
    return this.http.post(`${customerBaseURL}/signup`,user, this.httpOptions );
  }
  
  /* Login a customer */
  loginCustomer(user) : Observable<any>{
    return this.http.post(`${customerBaseURL}/login`,user, this.httpOptions )
  }

  /* Logout a customer */
  logoutCustomer(){
    localStorage.removeItem('cjwt');
    this.router.navigate(['/home']);
  }

  /* Check if token exists */
  loggedIn(){
    return !!localStorage.getItem('cjwt')
  }

  /* Fetch Token */
  getToken(){ 
    return localStorage.getItem('cjwt')
  }

  /* Login with google */
  googleLogin() : Observable<any>{
    return this.http.get(`${customerBaseURL}/google`);
  }
}
