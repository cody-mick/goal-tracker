import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalDetailComponent } from './goals/goal-detail/goal-detail.component';
import { GoalEditComponent } from './goals/goal-edit/goal-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
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
