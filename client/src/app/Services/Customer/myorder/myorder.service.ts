import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerBaseURL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MyorderService {

  constructor(private http: HttpClient) { }

  /* Get accepted Orders */
  getAcceptedOrders() : Observable<any>{
    return this.http.get(`${customerBaseURL}/accepted`);
  }

  /* Get accepted Orders */
  getPendingOrders() : Observable<any>{
    return this.http.get(`${customerBaseURL}/pending`);
  }

  /* Get accepted Orders */
  getInprocessOrders() : Observable<any>{
    return this.http.get(`${customerBaseURL}/inprocess`);
  }

  /* Get accepted Orders */
  getCompletedOrders() : Observable<any>{
    return this.http.get(`${customerBaseURL}/completed`);
  }

  /* Get accepted Orders */
  getCancelledOrders() : Observable<any>{
    return this.http.get(`${customerBaseURL}/cancelled`);
  }
}
