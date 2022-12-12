import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Goal } from '../goal.model';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss'],
})
export class NewGoalComponent implements OnInit {
  goal: Goal | undefined;

  constructor(private goalService: GoalsService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log('FORM SUBMISSION: ', value);
    const newGoal = new Goal(
      value.name,
      value.startDate,
      value.endDate,
      value.details
    );

    this.goalService.addGoal(newGoal);
  }
}
