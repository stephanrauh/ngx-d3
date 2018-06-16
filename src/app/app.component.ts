import { Component } from '@angular/core';
import { PieChartData } from 'projects/pie-chart/src/public_api';
import { scaleOrdinal } from 'd3-scale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public color = scaleOrdinal(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);

  public fruits: Array<PieChartData> = [
    { value: 10, caption: 'apples', color: 'green' },
    { value: 20, caption: 'oranges', color: 'orange' },
    { value: 30, caption: 'bananas', color: 'yellow' }
  ];

  public ages: Array<PieChartData> = [
    { value: 2704659, caption: '<5' },
    { value: 4499890, caption: '5-13' },
    { value: 2159981, caption: '14-17' },
    { value: 3853788, caption: '18-24' },
    { value: 14106543, caption: '25-44' },
    { value: 8819342, caption: '45-64' },
    { value: 612463, caption: '≥65' }
  ];

  public pieChartData: Array<PieChartData> = this.ages;

  constructor() {
    this.ages.forEach(d => {
      d.color = this.color(d.caption);
    });
  }

  public toggleCharts() {
    if (this.pieChartData === this.ages) {
      this.pieChartData = this.fruits;
    } else {
      this.pieChartData = this.ages;
    }
  }
}
