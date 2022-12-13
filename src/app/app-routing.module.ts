import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalDetailComponent } from './goals/goal-detail/goal-detail.component';
import { GoalEditComponent } from './goals/goal-edit/goal-edit.component';
import { GoalsComponent } from './goals/goals.component';
import { NewGoalComponent } from './goals/new-goal/new-goal.component';

const routes: Routes = [
  { path: '', redirectTo: '/goals', pathMatch: 'full' },
  {
    path: 'goals',
    component: GoalsComponent,
    children: [
      { path: 'new', component: NewGoalComponent },
      {
        path: ':goalId',
        component: GoalDetailComponent,
      },
      { path: ':goalId/edit', component: GoalEditComponent },
    ],
  },
  {
    path: 'goal-detail/:goalId',
    component: GoalDetailComponent,
    children: [{ path: 'edit', component: GoalEditComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
