import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { washerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  /* Get user's profile */
  getProfile() : Observable<any> {
    return this.http.get(`${washerBaseURL}/profile`);
  }

  /* Create user's profile */
  createProfile(data) : Observable <any> {
    return this.http.post(`${washerBaseURL}/profile`, data, this.httpOptions )
  }

  /* Update user's profile */
  updateProfile(data): Observable <any> {
    return this.http.put(`${washerBaseURL}/profile`, data, this.httpOptions )
  }
}
