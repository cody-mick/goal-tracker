import { Component, OnInit } from '@angular/core';
import { Goal } from './goal.model';
import { GoalsService } from './goals.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit {
  selectedGoal: Goal | undefined;

  constructor(private goalsService: GoalsService) {}

  ngOnInit(): void {
    this.goalsService.goalSelectedEvent.subscribe(
      (goal: Goal) => (this.selectedGoal = goal)
    );
  }
}
