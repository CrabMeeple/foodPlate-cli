import { Component, OnInit } from '@angular/core';
import { TodaysGoalService } from '../services/todays-goal.service';

@Component({
  selector: 'fp-todays-goal',
  templateUrl: './todays-goal.component.html',
  styleUrls: ['./todays-goal.component.css']
})
export class TodaysGoalComponent implements OnInit {

  goals: Array<string> = [
    'Eat more fruit',
    'Master rxjs',
    'Do 500 pushups',
    'Eat more vegetables',
    'Eat 1 bag of potato chips'
  ]

  sendGoal(goal): void {
    this.todaysGoalSvce.sendGoal(goal);
  }

  clearGoal() {
    this.todaysGoalSvce.clearGoal();
  }
  constructor(private todaysGoalSvce: TodaysGoalService) { }

  ngOnInit(): void {
  }

}
