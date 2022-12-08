import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Goal } from '../goal.model';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss'],
})
export class GoalsListComponent implements OnInit, OnDestroy {
  goals: Goal[];
  selectedGoal: Goal;
  subscription: Subscription;

  constructor(private goalsService: GoalsService) {}

  ngOnInit() {
    this.goalsService.getGoals();
    this.subscription = this.goalsService.goalListChangedEvent.subscribe(
      (goals: Goal[]) => (this.goals = goals)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
