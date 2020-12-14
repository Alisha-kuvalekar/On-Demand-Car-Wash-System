import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { washerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WashrequestService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  /* Get list of all pending reuqests */
  getPendingRequests() : Observable<any> {
    return this.http.get(`${washerBaseURL}/pending`);
  }

  /* Accept order by order id */
  acceptRequest(orderId) : Observable< any> {
    return this.http.put(`${washerBaseURL}/accept/${orderId}`, this.httpOptions);
  }

  /* Reject order by order id */
  rejectRequest(orderId) : Observable< any> {
    return this.http.put(`${washerBaseURL}/reject/${orderId}`, this.httpOptions);
  }

  /* Update order status to in-process */
  inprocessOrder(orderId) : Observable< any> {
    return this.http.put(`${washerBaseURL}/inprocess/${orderId}`, this.httpOptions)
  }

  /* Update order status to completedd */
  completedOrder(orderId): Observable<any> {
    return this.http.put(`${washerBaseURL}/completed/${orderId}`, this.httpOptions)
  }
}
