import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataSharingService } from './Services/data-sharing.service';


import { AppComponent } from './app.component';
import { NumbersPickerComponent } from './numbers-picker/numbers-picker.component';
import { NumberDisplayViewComponent } from './number-display-view/number-display-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersPickerComponent,
    NumberDisplayViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
