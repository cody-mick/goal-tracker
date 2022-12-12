import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Goal } from './goal.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GoalsService {
  goalSelectedEvent = new EventEmitter<Goal>();
  goalListChangedEvent = new Subject<Goal[]>();

  goals: Goal[] = [];

  constructor(private http: HttpClient) {}

  getGoals() {
    return this.http
      .get<{ message: string; goals: Goal[] }>('http://localhost:8888')
      .subscribe((response) => {
        console.log(response.message);
        this.goals = response.goals;
        let goalsClone = this.goals.slice();
        this.goalListChangedEvent.next(goalsClone);
      });
  }

  addGoal(newGoal: Goal) {
    if (!newGoal) return;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http
      .post<{ message: string; goal: Goal }>(
        'http://localhost:8888/goals',
        newGoal,
        {
          headers: headers,
        }
      )
      .subscribe((responseData) => {
        this.goals.push(responseData.goal);
        // let goalsListClone = this.goals.slice();
        // this.storeGoals(goalsListClone);
      });
  }

  // storeGoals(goals: Goal[]) {
  //   const stringifiedGoals = JSON.stringify(this.goals);
  //   return this.http
  //     .put('http://localhost:8888/goals', stringifiedGoals, {
  //       headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //     })
  //     .subscribe(() => {
  //       let goalsClone = this.goals.slice();
  //       this.goalListChangedEvent.next(goalsClone);
  //     });
  // }
}
