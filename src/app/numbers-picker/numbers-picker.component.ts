import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-numbers-picker',
    templateUrl: './numbers-picker.component.html',
    styleUrls: ['./numbers-picker.component.css']
})
export class NumbersPickerComponent implements OnInit {

    private numbers: Array<number> = new Array();
  
    constructor() { }

    ngOnInit() {
        // init the numbers
        for (let i = 0; i<49; i++) {
            this.numbers[i] = i+1;
        }
    }

}
