import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public spinnerObservable = new Subject<any>();

  constructor() { }

  show(options) {
    this.spinnerObservable.next({ flag: true, options });
  }

  hide() {
    this.spinnerObservable.next({ flag: false });
  }
}
