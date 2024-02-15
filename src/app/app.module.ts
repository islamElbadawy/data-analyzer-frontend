import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { FormsModule } from '@angular/forms';
import { FilterChartDataPipe } from './pipes/filter-chart-data.pipe';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VBarChartComponent } from './components/v-bar-chart/v-bar-chart.component';
import { ScatterPlotComponent } from './components/scatter-plot/scatter-plot.component';
import { StatsBoardComponent } from './components/stats-board/stats-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    FilterChartDataPipe,
    VBarChartComponent,
    ScatterPlotComponent,
    StatsBoardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
