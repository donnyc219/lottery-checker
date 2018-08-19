import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataSharingService } from './../Services/data-sharing.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-number-display-view',
  templateUrl: './number-display-view.component.html',
  styleUrls: ['./number-display-view.component.css']
})
export class NumberDisplayViewComponent implements OnInit {

    private dataSharingSub: Subscription;
    private allNumbers: Array<Array<number>> = [];
    numberArray: Array<number> = [];

    @Input() key: string;

    constructor(private dataSharing: DataSharingService) { }

    ngOnInit() {
        // when a number is clicked, the value is transferred to here in the end
        this.dataSharingSub = this.dataSharing.numberSource.subscribe(num => { 
            if (num["key"]==this.key) {
                this.numberArray.push(num["number"]);
                console.log(this.numberArray);
            }
        });
    }

    onDoneButton(){
        this.numberArray.sort();
        this.allNumbers.push(this.numberArray);
        this.numberArray = [];

        this.dataSharing.doneButtonTapped({"key": this.key});
    }

    ngOnDestroy(){
        this.dataSharingSub.unsubscribe();
    }


}
