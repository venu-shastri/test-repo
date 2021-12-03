import { Component, OnDestroy, OnInit } from '@angular/core';
import { MasterDetailsCommunicationService } from '../masterDetailsCommunication.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnDestroy {

  messages:Array<string>=[];
  subScritionReference:any=null;
  constructor(private service:MasterDetailsCommunicationService) { }

  //life cycle hook
  ngOnInit(): void {

 this.subScritionReference=   this.service.getObservable().subscribe((message)=>{

      this.messages.push(message);
    });
  }

  ngOnDestroy():void{
    this.subScritionReference.unSubscribe();
  }

}
