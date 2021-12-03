import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { DetailsComponent } from './details/details.component';
import { MasterDetailsCommunicationService } from './masterDetailsCommunication.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [MasterDetailsCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
