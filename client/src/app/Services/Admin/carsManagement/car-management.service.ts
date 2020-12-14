import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarManagementService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private http: HttpClient) { }

  /* Get list of active cars */
  getCars() : Observable<any>{
    return this.http.get(`${adminBaseURL}/cars`);
  }

  /* Get a specific car */
  getCar(id) : Observable<any> {
    return this.http.get(`${adminBaseURL}/cars/${id}`);
  }

 
  /* Create new car */
  createCar(data) : Observable < any> {
    return this.http.post(`${adminBaseURL}/cars`,data,this.httpOptions )
  }

  /* Update a car details */
  updateCar(data, id) : Observable <any> {
    return this.http.put(`${adminBaseURL}/cars/${id}`,data,this.httpOptions )
  }

  /* Delete a car */
  deleteCar(id) : Observable <any> {
    return this.http.delete(`${adminBaseURL}/cars/${id}`)
  }

  
}
