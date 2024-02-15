import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-plot',
  templateUrl: './box-plot.component.html',
  styleUrl: './box-plot.component.css',
})
export class BoxPlotComponent {
  @Input() data: any;
  chartData: any;

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {}
  ngOnInit() {
    console.log(this.data);
  }
}
