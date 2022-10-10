import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransfersComponent } from './transfers/transfers.component';

import {TransfersService} from "./transfers.service";

@NgModule({
  declarations: [
    AppComponent,
    TransfersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, TransfersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
