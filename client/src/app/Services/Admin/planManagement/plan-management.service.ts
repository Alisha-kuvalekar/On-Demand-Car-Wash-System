import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanManagementService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private http: HttpClient) { }

  /* Get a specific service */
  getplan(id) : Observable<any> {
    return this.http.get(`${adminBaseURL}/services/${id}`);
  }

  /* Get all services */
  getPlans(): Observable<any> {
    return this.http.get(`${adminBaseURL}/services`);
  }

  /* Create new Services */
  createService(data) : Observable < any> {
    return this.http.post(`${adminBaseURL}/services`,data,this.httpOptions )
  }

  /* Update a service */
  updateService(data, id) : Observable <any> {
    return this.http.put(`${adminBaseURL}/services/${id}`,data,this.httpOptions )
  }

  /* Delete a service */
  deleteService(id) : Observable <any> {
    return this.http.delete(`${adminBaseURL}/services/${id}`)
  }

  /* Get count of active services */
  countServices(): Observable <any>{
    return this.http.get(`${adminBaseURL}/activeCount`);
  }
}
