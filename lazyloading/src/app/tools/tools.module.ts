import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsdashboardComponent } from './toolsdashboard/toolsdashboard.component';


@NgModule({
  declarations: [
    ToolsdashboardComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
