import { Component, OnInit } from '@angular/core';
import { faTint } from '@fortawesome/free-solid-svg-icons';
import { LeaderboardService } from 'src/app/Services/Customer/leaderboard/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  dropIcon = faTint;
  leaderboardList =[];
  constructor(private _leaderboardService : LeaderboardService) { }

  ngOnInit(): void {
    this.leaderboardList =[];
    this._leaderboardService.getLeaderBoard()
      .subscribe(
        res => this.leaderboardList= res,
        err => console.log(err)
      )

  }

}
