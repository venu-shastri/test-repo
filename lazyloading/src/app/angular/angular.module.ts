import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngulardashboardComponent } from './angulardashboard/angulardashboard.component';


@NgModule({
  declarations: [
    AngulardashboardComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }
