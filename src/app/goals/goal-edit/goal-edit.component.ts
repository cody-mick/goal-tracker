import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  ngOnInit(): void {}

  onSubmit(form: NgForm) {}

  onCancel() {
    this.router.navigate(['/']);
  }
}
