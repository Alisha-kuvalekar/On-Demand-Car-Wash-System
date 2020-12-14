import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddonManagementService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  /* Get list of active Services */
  getActivePlans() : Observable<any>{
    return this.http.get(`${adminBaseURL}/activeServices`);
  }

  /* Get a specific addon */
  getAddon(id) : Observable<any> {
    return this.http.get(`${adminBaseURL}/addons/${id}`);
  }

  /* Get all addons */
  getAddons(): Observable<any> {
    return this.http.get(`${adminBaseURL}/addons`);
  }

  /* Create new addon */
  createAddon(data) : Observable < any> {
    return this.http.post(`${adminBaseURL}/addons`,data,this.httpOptions )
  }

  /* Update a addon */
  updateAddon(data, id) : Observable <any> {
    return this.http.put(`${adminBaseURL}/addons/${id}`,data,this.httpOptions )
  }

  /* Delete a addon */
  deleteAddon(id) : Observable <any> {
    return this.http.delete(`${adminBaseURL}/addons/${id}`)
  }
}
