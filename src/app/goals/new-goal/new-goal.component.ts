import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Goal } from '../goal.model';
import { GoalsService } from '../goals.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss'],
})
export class NewGoalComponent implements OnInit {
  goal: Goal | undefined;

  constructor(
    private goalService: GoalsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const value = form.value;
    const goalId = uuid();
    console.log('FORM SUBMISSION: ', value);
    console.log('GOAL ID: ', goalId);
    const newGoal = new Goal(
      goalId,
      value.name,
      value.startDate,
      value.endDate,
      value.details
    );

    this.goalService.addGoal(newGoal);
    this.router.navigate(['/goals']);
  }
}
