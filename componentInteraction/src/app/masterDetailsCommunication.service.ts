import { Observable, Subject } from "rxjs";

export class MasterDetailsCommunicationService{

  private messageStream=new Subject<string>();

  publish(message:string){

    this.messageStream.next(message);//update stream
  }
  getObservable():Observable<string>{
      return this.messageStream.asObservable();
  }

}

