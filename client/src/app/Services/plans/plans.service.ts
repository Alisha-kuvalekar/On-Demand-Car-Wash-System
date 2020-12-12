import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http : HttpClient) { }

  services(): Observable<any>{
    return this.http.get(`${customerBaseURL}/serviceplans`);
  }
  
}
