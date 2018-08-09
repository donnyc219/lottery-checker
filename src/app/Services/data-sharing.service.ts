import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {

    private numberSource = new BehaviorSubject<number>(0);
    public numberSourceObservable = this.numberSource.asObservable();
    constructor() { }

    numberSelected(num: number){
        this.numberSource.next(num);
    }

}
