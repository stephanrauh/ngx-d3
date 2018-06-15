import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { path } from 'd3-path';
import { arc, pie, DefaultArcObject, PieArcDatum } from 'd3-shape';

export interface PieChartData {
  value: number;
  caption: string;
  color?: string;
  path?: string;
  textPosition?: [number, number];
}

@Component({
  selector: 'lib-pie-chart',
  templateUrl: './pie-chart-component.html',
  styleUrls: ['./pie-chart-component.css']
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() data: Array<PieChartData> = [];

  @Input() width = 500;

  @Input() height = 500;

  @Input() radius = Math.min(this.width, this.height) / 2;

  public chartdata!: (PieArcDatum<PieChartData> & DefaultArcObject)[];

  public center: string;
  constructor() {
    this.center = `translate(${this.width / 2}, ${this.height / 2})`;
  }

  ngOnInit() {}

  ngOnChanges(changes: any): void {
    this.version2();
  }

  private version2(): void {
    const label = arc()
      .outerRadius(this.radius - 40)
      .innerRadius(this.radius - 40);

    const pieChartDataGenerator = pie<PieChartData>()
      .sort(null)
      .value((d: PieChartData) => d.value);

    const path = arc()
      .outerRadius(this.radius - 10)
      .innerRadius(0);

    //const o: DefaultArcObject = null;
    //o.endAngle;
    //o.innerRadius;
    //o.outerRadius;
    //o.startAngle;

    const x: PieArcDatum<PieChartData>[] = pieChartDataGenerator(this.data);

    this.chartdata = x.map(element => {
      return {
        ...element,
        innerRadius: this.radius - 40,
        outerRadius: this.radius
      };
    });

    this.chartdata.forEach(d => {
      d.data.path = path(d);
      d.data.textPosition = label.centroid(d);
      console.dir(d);
    });
  }

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
}
