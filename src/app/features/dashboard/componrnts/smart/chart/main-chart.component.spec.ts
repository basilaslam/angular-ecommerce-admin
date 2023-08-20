import { ComponentFixture, TestBed } from '@angular/core/testing';

import { showMainChartComponent } from './main-chart.component';

describe('ChartComponent', () => {
  let component: showMainChartComponent;
  let fixture: ComponentFixture<showMainChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ showMainChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(showMainChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
