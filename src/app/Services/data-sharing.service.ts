import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class DataSharingService {

    // private numberSource = new BehaviorSubject<number>(0);
    // public numberSourceObservable = this.numberSource.asObservable();
    public numberSource = new Subject<number>();
    constructor() { }

    numberSelected(num: number){
        this.numberSource.next(num);
    }

}
