import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }

  /* List for leaderboard */
  getLeaderBoard(): Observable<any> {
    return this.http.get(`${customerBaseURL}/leaderboard`);
  }
}
