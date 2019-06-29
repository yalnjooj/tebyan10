import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferdataService {

  private dataStageMessage = new BehaviorSubject('Basic Approval is required!');
  currentDataStageMessage = this.dataStageMessage.asObservable();

  constructor() { }
  addMessage(message: string) {
    this.dataStageMessage.next(message)
  }
}
