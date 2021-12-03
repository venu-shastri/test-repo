import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"angular",loadChildren:()=>import('./angular/angular.module').then(m=>m.AngularModule)},
  {path:"tools",loadChildren:()=>import('./tools/tools.module').then(m=>m.ToolsModule)},
  {path:"document",loadChildren:()=>import('./documentation/documentation.module').then(m=>m.DocumentationModule)},
  {path:"blog",loadChildren:()=>import('./blog/blog.module').then(m=>m.BlogModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
