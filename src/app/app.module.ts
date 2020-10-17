import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { OrderByPipe } from './orderBy.pipe';
import { CustomerComponent } from './customer/customer.component';
import { DistanceCalcService } from './distance-calc.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrderByPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [DistanceCalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
