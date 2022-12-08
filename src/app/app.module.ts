import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GoalsComponent } from './goals/goals.component';
import { NewGoalComponent } from './goals/new-goal/new-goal.component';
import { GoalsListComponent } from './goals/goals-list/goals-list.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, GoalsComponent, NewGoalComponent, GoalsListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
