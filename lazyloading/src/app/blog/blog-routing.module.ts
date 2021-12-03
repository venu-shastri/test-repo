import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdashboardComponent } from './blogdashboard/blogdashboard.component';

const routes: Routes = [
  {path:"",component:BlogdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
