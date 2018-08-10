import { Component, OnInit, Input } from '@angular/core';
import { DataSharingService } from './../Services/data-sharing.service';

@Component({
    selector: 'app-numbers-picker',
    templateUrl: './numbers-picker.component.html',
    styleUrls: ['./numbers-picker.component.css']
})
export class NumbersPickerComponent implements OnInit {

    private numbers: Array<number> = new Array();
    @Input() key: number;
  
    constructor(private dataSharing: DataSharingService) { }
    
    ngOnInit() {
        // init the numbers
        for (let i = 0; i<49; i++) {
            this.numbers[i] = i+1;
        }
    }

    numberClicked(num: number){
        this.dataSharing.numberSelected({number: num, key: this.key});
    }

}
