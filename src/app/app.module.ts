import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import 'wijmo/cultures/wijmo.culture.ja.js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WjGridModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
