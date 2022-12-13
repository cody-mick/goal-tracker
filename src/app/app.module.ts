import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GoalsComponent } from './goals/goals.component';
import { NewGoalComponent } from './goals/new-goal/new-goal.component';
import { GoalsListComponent } from './goals/goals-list/goals-list.component';
import { GoalItemComponent } from './goals/goal-item/goal-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoalEditComponent } from './goals/goal-edit/goal-edit.component';
import { GoalDetailComponent } from './goals/goal-detail/goal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GoalsComponent,
    NewGoalComponent,
    GoalsListComponent,
    GoalItemComponent,
    GoalEditComponent,
    GoalDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
