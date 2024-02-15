import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrl: './scatter-plot.component.css',
})
export class ScatterPlotComponent {
  @Input() data: any | undefined;
  chartData: any[] | undefined;
  view: [number, number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = '';
  maxRadius: number = 5;
  minRadius: number = 1;
  yScaleMin: number = 0;
  yScaleMax: number = 1.5;

  colorScheme: { domain: string[] } = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    // Object.assign(this, { data: this.chartData });
  }

  ngOnInit() {
    this.chartData = this.transformData(this.data);
    console.log(this.chartData);
  }

  transformData(data: any) {
    return Object.keys(data).map((category) => {
      const series = Object.keys(data[category]).map((name) => {
        const dataPoint = data[category][name];
        return {
          name: name,
          x: name,
          y: dataPoint,
          r: dataPoint,
        };
      });

      return {
        name: category,
        series: series,
      };
    });
  }
}
