import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataSharingService } from './Services/data-sharing.service';
import { MethodsHelperService } from './Services/methods-helper.service';
// import { NumberDisplayViewComponent } from './number-display-view/number-display-view.component';
// import { Subscription } from 'rxjs/Subscription';
// import { all } from 'q';
import { ApiService } from './Services/api.service' 
import { Powerball } from './Class/powerball' 
import { Lottery } from './Class/lottery';
import { Megamillion } from './Class/megamillion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'app';
    
    @ViewChild('selectedNum') userSelectedComp;
    @ViewChild('lotteryNum') lotteryComp;
    lottery: Lottery;

    constructor(private dataSharing: DataSharingService, 
        private methodHelper: MethodsHelperService,
        private http: ApiService){

    }

    ngOnInit(){

        // this.http.getLatestMegaMillion().subscribe((data: Powerball) => {
        //     console.log("what u got: " + data.winning_numbers[0]);
        // });
    }

    onCheck(){

        let str = "";
        let allNumbers: Array<Array<number>> = this.userSelectedComp.allNumbers;
        let lotteryNumbers: Array<Array<number>> = this.lotteryComp.allNumbers;
        let arrayOfSet: Array<Set<number>> = [];

        allNumbers.forEach((numbers: Array<number>) => {
            let set: Set<number> = this.checkMatchingNumber(lotteryNumbers[0], numbers);
            if (set.size>0) {
                arrayOfSet.push(set);
            }
        });

        this.methodHelper.printArrayOfSet(arrayOfSet);
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

    onMegamillion(){
        this.http.getLatestMegaMillion().subscribe((data: Megamillion) => {
            this.lottery = data;
        });
    }

    onPowerball(){
        this.http.getLatestPowerball().subscribe((data: Powerball) => {
            console.log("data:: " + data.draw_date);
            console.log("data:: " + data.multiplier);
            console.log("data:: " + data.winning_numbers);
            
            this.lottery = data;
        });
    }

    ngOnDestroy(){
        
    }
}
