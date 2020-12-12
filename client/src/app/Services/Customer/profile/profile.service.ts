import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { customerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  /* get profile details based on user id */
  getProfile(): Observable<any>{
    return this.http.get(`${customerBaseURL}/profile`);
  }


  /* Create profile details for user */
  postProfile(user) : Observable<any>{
    return this.http.post(`${customerBaseURL}/profile`, user, this.httpOptions);
  }

  
  /* Update profile by user id */
  updateProfile(user) : Observable<any> {
    return this.http.put(`${customerBaseURL}/profile`,user, this.httpOptions)
  }

  /* Get list of all active cars */
  getCarsList() : Observable <any>{
    return this.http.get(`${customerBaseURL}/cars`);
  }


}
