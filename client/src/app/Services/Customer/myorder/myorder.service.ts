import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerBaseURL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MyorderService {

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  /* Get accepted Orders */
  getAcceptedOrders() : Observable<any>{
    return this.http.get(`${customerBaseURL}/accepted`);
  }

  /* Get pending Orders */
  getPendingOrders() : Observable<any>{
    return this.http.get(`${customerBaseURL}/pending`);
  }

  /* Get inprocess Orders */
  getInprocessOrders() : Observable<any>{
    return this.http.get(`${customerBaseURL}/inprocess`);
  }

  /* Get completed and paid orders */
  getCompletedAndPaidOrders() : Observable<any>{
    return this.http.get(`${customerBaseURL}/completedAndPaid`);
  }

  /* Get completed and paid orders */
   getCompletedAndUnpaidOrders() : Observable<any>{
    return this.http.get(`${customerBaseURL}/completedAndUnpaid`);
  }

  /* Get cancelled Orders */
  getCancelledOrders() : Observable<any>{
    return this.http.get(`${customerBaseURL}/cancelled`);
  }

  /* Change payment status of order */
  changePaymentStatus(orderId) : Observable<any>{
    return this.http.put(`${customerBaseURL}/orderPayment/${orderId}`,this.httpOptions)
  }
}
