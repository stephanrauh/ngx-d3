import { Component, OnInit, Input, OnChanges } from '@angular/core';
// import { path } from 'd3-path';
import { arc, pie, DefaultArcObject, PieArcDatum } from 'd3-shape';

export interface PieChartData {
  value: number;
  caption: string;
  color?: string;
}

export interface InternalPieChartData extends PieChartData {
  path?: string;
  textPosition?: [number, number];
}

@Component({
  selector: 'lib-pie-chart',
  templateUrl: './pie-chart-component.html',
  styleUrls: ['./pie-chart-component.css']
})
export class PieChartComponent implements OnChanges {
  @Input() data: Array<PieChartData> = [];

  @Input() width = 500;

  @Input() height = 500;

  @Input() radius = Math.min(this.width, this.height) / 2;

  public chartdata!: (PieArcDatum<InternalPieChartData> & DefaultArcObject)[];

  public center: string;

  constructor() {}

  ngOnChanges(changes: any): void {
    this.center = `translate(${this.width / 2}, ${this.height / 2})`;

    const label = arc()
      .outerRadius(this.radius - 40)
      .innerRadius(this.radius - 40);

    const pieChartDataGenerator = pie<PieChartData>()
      .sort(null)
      .value((d: PieChartData) => d.value);

    const svgPathGenerator = arc()
      .outerRadius(this.radius - 10)
      .innerRadius(0);

    const x: PieArcDatum<InternalPieChartData>[] = pieChartDataGenerator(this.data);

    this.chartdata = x.map(element => {
      return {
        ...element,
        innerRadius: this.radius - 40,
        outerRadius: this.radius
      };
    });

    this.chartdata.forEach(d => {
      d.data.path = svgPathGenerator(d);
      d.data.textPosition = label.centroid(d);
      console.dir(d);
    });
  }

  /**
   * This method is not part of the final component.
   * Instead, it's merely the first approach as described in the article https://www.beyondjava.net/ngx-d3-pie-chart.
   */
  /*
  private version1(): void {
    const sum = this.data.reduce((p, c) => p + c.value, 0);
    let lastAngle = 0;
    this.data.forEach(d => {
      const newAngle = lastAngle + ((2 * Math.PI) / sum) * d.value;
      const context = path();
      context.moveTo(0, 0);
      context.arc(0, 0, this.radius, lastAngle, newAngle, false);
      d.path = context.toString();
      console.log(d.path);
      lastAngle = newAngle;
    });
  }
  */
}
