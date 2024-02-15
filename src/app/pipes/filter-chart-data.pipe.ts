import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChartData',
})
export class FilterChartDataPipe implements PipeTransform {
  transform(chartData: any): any[] {
    return Object.keys(chartData).map((category) => ({
      name: category,
      value: chartData[category],
    }));
  }
}
