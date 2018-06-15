import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PieChartModule } from 'projects/pie-chart/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PieChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
