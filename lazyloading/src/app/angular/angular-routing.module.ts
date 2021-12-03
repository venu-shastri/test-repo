import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngulardashboardComponent } from './angulardashboard/angulardashboard.component';

const routes: Routes = [
  {path:"",component:AngulardashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
