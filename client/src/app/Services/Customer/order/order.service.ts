import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { customerBaseURL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
}) 
export class OrderService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private router: Router) { }

  /* Create a new order */
  createOrder(order): Observable<any> {
    return this.http.post(`${customerBaseURL}/order`,  order, this.httpOptions);
  }

  /* get addons */
  getAddons(service): Observable <any>{
    return this.http.get(`${customerBaseURL}/addons/${service}`)
  }

  /* Get list of washers to choose from */
  getWashers(): Observable <any> {
    return this.http.get(`${customerBaseURL}/findWashers`);
  }

  /* Get list of scheduled later washes */
  getScheduledWashes() : Observable<any>{
    return this.http.get(`${customerBaseURL}/scheduledLater`);
  }

  /* Cancel a order */
  cancelOrder(id): Observable<any> {
    return this.http.put(`${customerBaseURL}/order/${id}`, this.httpOptions);
  }

  /* Increase wash count after payment is done */
  increaseWashCount(): Observable<any>{
    return this.http.put(`${customerBaseURL}/washcount`, this.httpOptions);
  }
}
