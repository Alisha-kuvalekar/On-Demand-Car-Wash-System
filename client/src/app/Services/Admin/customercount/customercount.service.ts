import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomercountService {

  constructor(private http : HttpClient) { }

  /* Get count of customers to display on dashboard */
  customerCount() : Observable<any> {
    return this.http.get(`${adminBaseURL}/customersCount`);
  }
}
