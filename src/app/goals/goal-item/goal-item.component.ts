import { Component, Input, OnInit } from '@angular/core';
import { Goal } from '../goal.model';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.scss'],
})
export class GoalItemComponent implements OnInit {
  @Input() goal: Goal;

  constructor(private goalsService: GoalsService) {}

  ngOnInit(): void {}
}
