import { NgModule } from '@angular/core';
import { PieChartComponent } from './pie-chart.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [PieChartComponent],
  exports: [PieChartComponent]
})
export class PieChartModule {}
