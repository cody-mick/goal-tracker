import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Goal } from '../goal.model';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss'],
})
export class GoalDetailComponent implements OnInit {
  goal: Goal | undefined;
  id: string;

  constructor(
    private goalService: GoalsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['goalId'];
      this.goal = this.goalService.getGoal(this.id);
    });
  }

  onDelete() {
    this.goalService.deleteGoal(this.goal);
    this.router.navigate(['/goals']);
  }
}
