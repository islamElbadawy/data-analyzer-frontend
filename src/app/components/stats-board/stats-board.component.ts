import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-board',
  templateUrl: './stats-board.component.html',
  styleUrl: './stats-board.component.css',
})
export class StatsBoardComponent {
  @Input() data: any;
  chartData: any[] | undefined;
  view: [number, number] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  cardColor: string = '#232837';

  ngOnInit() {
    this.chartData = Object.keys(this.data).map((key) => {
      return {
        name: key,
        value: this.data[key],
      };
    });
    console.log(this.data);
  }
}
