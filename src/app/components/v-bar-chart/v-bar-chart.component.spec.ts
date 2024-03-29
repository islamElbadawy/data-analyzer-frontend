import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HBarChartComponent } from './v-bar-chart.component';

describe('HBarChartComponent', () => {
  let component: HBarChartComponent;
  let fixture: ComponentFixture<HBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HBarChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
