import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataSharingService } from './Services/data-sharing.service';
import { MethodsHelperService } from './Services/methods-helper.service';
import { NumberDisplayViewComponent } from './number-display-view/number-display-view.component';
import { Subscription } from 'rxjs/Subscription';
import { all } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'app';
    
    @ViewChild('selectedNum') userSelectedComp;
    @ViewChild('lotteryNum') lotteryComp;

    constructor(private dataSharing: DataSharingService, private methodHelper: MethodsHelperService){

    }

    ngOnInit(){

    }

    onCheck(){
        // let res: Set<number> = this.checkMatchingNumber(this.lotteryComp.numberArray, this.displayComp.numberArray)
        // res.forEach((val: number) => {
        //     console.log(`value: ${val}`);
        // });
        let str = "";
        let allNumbers: Array<Array<number>> = this.userSelectedComp.allNumbers;
        let lotteryNumbers: Array<Array<number>> = this.lotteryComp.allNumbers;
        
        this.methodHelper.printArraysOfArray(allNumbers);
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
