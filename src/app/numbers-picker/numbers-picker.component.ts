import { Component, OnInit, Input, ViewChildren, OnDestroy } from '@angular/core';
import { DataSharingService } from './../Services/data-sharing.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-numbers-picker',
    templateUrl: './numbers-picker.component.html',
    styleUrls: ['./numbers-picker.component.css']
})
export class NumbersPickerComponent implements OnInit, OnDestroy{

    private initialNumbers: Array<number> = new Array();
    private doneButtonSubscription: Subscription;

    @Input() key: number;

    @ViewChildren("numberButtons") numberButtons;
  
    constructor(private dataSharing: DataSharingService) { }
    
    ngOnInit() {
        // init the numbers
        for (let i = 0; i<49; i++) {
            this.initialNumbers[i] = i+1;
        }

        this.doneButtonSubscription = this.dataSharing.doneButtonNotifier.subscribe(() => {
            // when done button is clicked
            this.resetAllButtons();
        });
    }

    resetAllButtons(){
        this.numberButtons.toArray().forEach(element => {
            element.nativeElement.disabled = false;
        });
    }

    numberClicked(num: number){
        this.dataSharing.numberSelected({number: num, key: this.key});
        let aButton = this.numberButtons.toArray()[num-1].nativeElement;
        aButton.disabled = true;
    }

    ngOnDestroy() {
        this.doneButtonSubscription.unsubscribe();
    }

}
