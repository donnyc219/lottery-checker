import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class DataSharingService {

    public numberSource = new Subject<number>();
    public numberSource2 = new Subject<number>();
    public doneButtonNotifier = new Subject<number>();
    constructor() { }

    numberSelected(num: any){
        this.numberSource.next(num);
    }

    // number, key
    numberUpdated(num: any){
        this.numberSource2.next(num);
    }

    doneButtonTapped(){
        this.doneButtonNotifier.next();
    }

}
