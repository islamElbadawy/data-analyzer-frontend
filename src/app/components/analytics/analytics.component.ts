import { Component, Input } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css',
})
export class AnalyticsComponent {
  @Input() data: any;
  chartData: any;

  constructor() {}

  ngOnInit() {
    this.chartData = this.transformChartData(
      this.data['averages_by_title'][
        'Supply Chain Emission Factors without Margins'
      ]
    );
    console.log(this.data);
  }

  transformChartData(chartData: any): any[] {
    return Object.keys(chartData).map((category) => ({
      name: category,
      value: chartData[category],
    }));
  }
}
