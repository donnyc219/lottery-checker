import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataSharingService } from './Services/data-sharing.service';
import { MethodsHelperService } from './Services/methods-helper.service';
import { ApiService } from './Services/api.service';

import { HttpClientModule } from '@angular/common/http'


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
    BrowserModule,
    HttpClientModule
  ],

  // add service here
  providers: [DataSharingService, MethodsHelperService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
