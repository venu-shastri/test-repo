import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,OnChanges {

  @Input()
  message:string="";
  
  constructor() {

    console.log("component Instantiated");
  }

   ngOnChanges(obj:SimpleChanges):void{

    console.log("OnChanges Called ",obj);

   }

  ngOnInit(): void {
    console.log("Init Is Called");
  }

}
