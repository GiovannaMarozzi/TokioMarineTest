import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransfersComponent } from './transfers/transfers.component';

import {TransfersService} from "./transfers.service";
import { FormsModule } from "@angular/forms";
import { NgxMaskModule} from "ngx-mask";


@NgModule({
  declarations: [
    AppComponent,
    TransfersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [HttpClientModule, TransfersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
