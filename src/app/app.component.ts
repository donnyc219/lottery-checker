import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataSharingService } from './Services/data-sharing.service';
import { NumberDisplayViewComponent } from './number-display-view/number-display-view.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'app';
    
    @ViewChild('selectedNum') userSelectedDisplay;
    @ViewChild('lotteryNum') loteryDisplay;

    constructor(private dataSharing: DataSharingService){

    }

    ngOnInit(){

    }

    onCheck(){
        console.log("check number now: " + this.userSelectedDisplay.numberArray);
        console.log("check number now: " + this.loteryDisplay.numberArray);

        let res: Set<number> = this.checkMatchingNumber(this.loteryDisplay.numberArray, this.userSelectedDisplay.numberArray)
        res.forEach((val: number) => {
            console.log(`value: ${val}`);
        });
        
    }

    private checkMatchingNumber(lotteryNumbers: Array<number>, userNumbers: Array<number>): Set<number>{
        let lotterySet = new Set(lotteryNumbers);
        let userNumberSet = new Set(userNumbers);
        let machingSet = new Set();

        lotterySet.forEach((num) => {
            if (userNumberSet.has(num))
                machingSet.add(num);
        });

        return machingSet;

    }

    ngOnDestroy(){
        
    }
}
