import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public data = new BehaviorSubject<boolean>(false);

  setData(selection: any){
    this.data.next(selection);
}


}
