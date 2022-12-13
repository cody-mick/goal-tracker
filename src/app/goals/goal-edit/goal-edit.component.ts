import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Goal } from '../goal.model';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-goal-edit',
  templateUrl: './goal-edit.component.html',
  styleUrls: ['./goal-edit.component.scss'],
})
export class GoalEditComponent implements OnInit {
  id: string | undefined;
  originalGoal: Goal | undefined;
  goal: Goal | undefined;
  editMode: boolean = false;

  constructor(
    private goalService: GoalsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['goalId'];
      if (!this.id) {
        this.editMode = false;
        return;
      }
      this.originalGoal = this.goalService.getGoal(this.id);
      if (!this.originalGoal) return;
      this.editMode = true;
      this.goal = { ...this.originalGoal };
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newGoal = new Goal(
      '1',
      value.name,
      value.startDate,
      value.endDate,
      value.details
    );

    if (this.editMode) {
      this.goalService.updateGoal(this.originalGoal, newGoal);
    } else {
      this.goalService.addGoal(newGoal);
    }
    this.router.navigate(['/goals']);
  }

  onCancel() {
    this.router.navigate(['/goals']);
  }
}
