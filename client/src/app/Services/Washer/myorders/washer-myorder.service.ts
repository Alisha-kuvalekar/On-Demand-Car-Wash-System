import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { washerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WasherMyorderService {

  constructor(private http: HttpClient) { }

  /* get list of accepted orders */
  acceptedOrders() : Observable<any> {
    return this.http.get(`${washerBaseURL}/accepted`);
  }

  
  /* get list of In-process orders */
  inprocessOrders() : Observable<any> {
    return this.http.get(`${washerBaseURL}/inprocess`);
  }

  
  /* get list of Completed adn paid orders */
  completedAndPaidOrders() : Observable<any> {
    return this.http.get(`${washerBaseURL}/completedAndPaid`);
  }

   /* get list of Completed adn paid orders */
  completedAndUnpaidOrders() : Observable<any> {
    return this.http.get(`${washerBaseURL}/completedAndUnpaid`);
  }


  /* get list of Cancelled orders */
  cancelledOrders() : Observable<any> {
    return this.http.get(`${washerBaseURL}/cancelled`);
  }

   /* get list of Scheduled orders */
   scheduledOrders() : Observable<any> {
    return this.http.get(`${washerBaseURL}/scheduledLater`);
  }
}
