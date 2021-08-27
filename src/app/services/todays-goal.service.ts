import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodaysGoalService {
  private subject = new Subject<any>();

  sendGoal(goal: string) {
    this.subject.next(goal);
    console.log(goal);
  }
  clearGoal() {
    this.subject.next();
  }

  getGoal(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }
}
