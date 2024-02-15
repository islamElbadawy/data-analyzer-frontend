import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { FormsModule } from '@angular/forms';
import { FilterChartDataPipe } from './pipes/filter-chart-data.pipe';
import { BoxPlotComponent } from './components/box-plot/box-plot.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HBarChartComponent } from './components/h-bar-chart/h-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    FilterChartDataPipe,
    BoxPlotComponent,
    HBarChartComponent,
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
