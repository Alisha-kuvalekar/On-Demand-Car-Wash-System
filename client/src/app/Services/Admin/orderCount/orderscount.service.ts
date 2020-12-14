import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderscountService {

  constructor(private http : HttpClient) { }

  /* Get count of completed Orders */
  getCompletedOrdersCount() : Observable <any>{
    return this.http.get(`${adminBaseURL}/completedOrdersCount`);
  }

}
