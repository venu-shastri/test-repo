import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogdashboardComponent } from './blogdashboard/blogdashboard.component';


@NgModule({
  declarations: [
    BlogdashboardComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
