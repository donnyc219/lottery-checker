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
    // candidateNumbers = "red-background";
    @Input() key: number;

    constructor(private dataSharing: DataSharingService) { }

    ngOnInit() {
        this.dataSharingSub = this.dataSharing.numberSource.subscribe(num => { 
            if (num["key"]==this.key) {
                this.numberArray.push(num["number"]);
                // this.myclass = "green-background";
                console.log(this.numberArray);
            }
        });
    }

    onDoneButton(){
        this.allNumbers.push(this.numberArray);
        this.numberArray = [];
    }

    ngOnDestroy(){
        this.dataSharingSub.unsubscribe();
    }


}
