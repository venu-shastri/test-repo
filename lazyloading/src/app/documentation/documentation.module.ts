import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocdashboardComponent } from './docdashboard/docdashboard.component';


@NgModule({
  declarations: [
    DocdashboardComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule
  ]
})
export class DocumentationModule { }
