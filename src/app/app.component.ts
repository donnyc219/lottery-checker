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

        
    }

    ngOnDestroy(){
        
    }
}
