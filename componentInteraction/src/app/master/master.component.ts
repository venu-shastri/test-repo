import { Component, OnInit } from '@angular/core';
import { MasterDetailsCommunicationService } from '../masterDetailsCommunication.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  message:string=""

  constructor(private service:MasterDetailsCommunicationService) { }

  sendMessage(){
    this.service.publish(this.message);
  }

  ngOnInit(): void {
  }

}
