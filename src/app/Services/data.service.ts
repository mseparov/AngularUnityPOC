import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public nodeConfigDataFromUnity = new BehaviorSubject<string>("");
  public nodeConfigSliderApply = new BehaviorSubject<any>(0);

  setNodeConfigDataFromUnity(data: any){
    this.nodeConfigDataFromUnity.next(data);
  }


  setNodeConfigSliderApply(data: any){
    this.nodeConfigSliderApply.next(data);
  }

}
