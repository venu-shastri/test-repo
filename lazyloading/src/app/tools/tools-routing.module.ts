import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsdashboardComponent } from './toolsdashboard/toolsdashboard.component';

const routes: Routes = [
  {
    path:"",component:ToolsdashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
