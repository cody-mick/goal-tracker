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
      .get<{ message: string; goals: Goal[] }>('http://localhost: 8888')
      .subscribe((response) => {
        console.log(response.message);
        this.goals = response.goals;
        let goalsClone = this.goals.slice();
        this.goalListChangedEvent.next(goalsClone);
      });
  }
}
