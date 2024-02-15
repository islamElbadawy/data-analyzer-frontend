import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-bar-chart',
  templateUrl: './v-bar-chart.component.html',
  styleUrl: './v-bar-chart.component.css',
})
export class VBarChartComponent {
  @Input() data: any;
  chartData: any;

  view: [number, number] = [900, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  @Input() xAxisLabel = '2017 NAICS Title';
  showYAxisLabel = true;
  @Input() yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
}
