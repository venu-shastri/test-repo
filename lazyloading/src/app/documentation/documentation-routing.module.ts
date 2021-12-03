import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocdashboardComponent } from './docdashboard/docdashboard.component';

const routes: Routes = [
  {path:"",component:DocdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
