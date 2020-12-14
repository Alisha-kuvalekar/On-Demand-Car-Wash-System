import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WasherapprovalService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  /* Get list of unapproved washers */
  getUnapprovedWashers() : Observable<any> {
    return this.http.get(`${adminBaseURL}/washer`);
  }

  /* Approve a washer */
  updateWasher(id) : Observable <any> {
    return this.http.put(`${adminBaseURL}/washer/${id}`, this.httpOptions);
  }

  /* Delete/Reject a washer  */
  rejectWasher(id) : Observable <any> {
    return this.http.delete(`${adminBaseURL}/washer/${id}`)
  }

  /* get count of washers to display on dashboard */
  countWashers() : Observable <any >{
    return this.http.get(`${adminBaseURL}/countWashers`);
  }

  
}
